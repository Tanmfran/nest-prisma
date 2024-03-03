const { getDMMF } = require("@prisma/sdk");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

function lowerFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function generateIncludeObject(relations) {
  const includes = {};
  relations.forEach((relation) => {
    includes[relation] = true;
  });
  return JSON.stringify(includes);
}

async function generateNestComponentsFromSchema(schemaPath) {
  const schema = fs.readFileSync(schemaPath, "utf8");
  const dmmf = await getDMMF({ datamodel: schema });
  const basePath = path.join(__dirname, "src");

  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath, { recursive: true });
  }

  dmmf.datamodel.models.forEach((model) => {
    const modelName = model.name;
    const serviceName = `${lowerFirstLetter(modelName)}Service`;
    const controllerName = `${modelName}Controller`;
    const moduleName = `${modelName}Module`;
    const modelFolder = path.join(basePath, lowerFirstLetter(modelName));

    // Create model folder
    if (!fs.existsSync(modelFolder)) {
      fs.mkdirSync(modelFolder, { recursive: true });
    }

    // Identify relations to include
    const relations = model.fields
      .filter((field) => field.relationName)
      .map((field) => field.name);

    const includeRelations =
      relations.length > 0
        ? `include: ${generateIncludeObject(relations)}`
        : "";

    // Generate service file
    const serviceTemplate = `
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ${modelName}, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ${modelName}Service {
  async create(data: Prisma.${modelName}CreateInput) {
    return prisma.${lowerFirstLetter(modelName)}.create({ data });
  }

  async findAll() {
    return prisma.${lowerFirstLetter(modelName)}.findMany({ ${includeRelations} });
  }

  async findOne(id: number) {
    return prisma.${lowerFirstLetter(modelName)}.findUnique({ where: { id }, ${includeRelations} });
  }

  async update(id: number, data: Prisma.${modelName}UpdateInput) {
    return prisma.${lowerFirstLetter(modelName)}.update({ where: { id }, data });
  }

  async remove(id: number) {
    return prisma.${lowerFirstLetter(modelName)}.delete({ where: { id } });
  }
}
`.trim();

    fs.writeFileSync(
      path.join(modelFolder, `${modelName}Service.ts`),
      serviceTemplate,
    );

    // Generate controller file
    const controllerTemplate = `
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ${modelName}Service } from './${serviceName}';

@Controller('${lowerFirstLetter(modelName)}')
export class ${controllerName} {
  constructor(private readonly ${serviceName}: ${modelName}Service) {}

  @Post()
  create(@Body() createDto: any) { // Consider defining a CreateDto
    return this.${serviceName}.create(createDto);
  }

  @Get()
  findAll() {
    return this.${serviceName}.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.${serviceName}.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: any) { // Consider defining an UpdateDto
    return this.${serviceName}.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.${serviceName}.remove(+id);
  }
}
`.trim();

    fs.writeFileSync(
      path.join(modelFolder, `${controllerName}.ts`),
      controllerTemplate,
    );

    // Generate module file
    const moduleTemplate = `
import { Module } from '@nestjs/common';
import { ${controllerName} } from './${controllerName}';
import { ${modelName}Service } from './${serviceName}';

@Module({
  controllers: [${controllerName}],
  providers: [${modelName}Service],
})
export class ${moduleName} {}
`.trim();

    fs.writeFileSync(
      path.join(modelFolder, `${moduleName}.ts`),
      moduleTemplate,
    );
  });

  console.log("NestJS component files generated successfully.");

  // Run npm run format to format the generated files
  exec("npm run format", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log("Files have been formatted.");
  });
}

// Replace './prisma/schema.prisma' with the path to your actual Prisma schema file
generateNestComponentsFromSchema("./prisma/schema.prisma").catch(console.error);
