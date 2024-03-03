const { getDMMF } = require("@prisma/sdk");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

function lowerFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

async function generateNestComponentsFromSchema(schemaPath) {
  const schema = fs.readFileSync(schemaPath, "utf8");
  const dmmf = await getDMMF({ datamodel: schema });

  dmmf.datamodel.models.forEach((model) => {
    const modelName = model.name;
    const camelModelName = lowerFirstLetter(modelName);
    const basePath = path.join(__dirname, camelModelName);

    // Ensure the base directory exists
    if (!fs.existsSync(basePath)) {
      fs.mkdirSync(basePath, { recursive: true });
    }

    // Generate service file
    const serviceTemplate = `
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { ${modelName}, Prisma } from '@prisma/client';

@Injectable()
export class ${modelName}Service {
  async create(data: Prisma.${modelName}CreateInput) {
    return prisma.${camelModelName}.create({ data });
  }

  async findAll() {
    return prisma.${camelModelName}.findMany();
  }

  async findOne(id: number) {
    return prisma.${camelModelName}.findUnique({ where: { id }});
  }

  async update(id: number, data: Prisma.${modelName}UpdateInput) {
    return prisma.${camelModelName}.update({ where: { id }, data });
  }

  async remove(id: number) {
    return prisma.${camelModelName}.delete({ where: { id } });
  }
}
`.trim();

    fs.writeFileSync(
      path.join(basePath, `${camelModelName}.service.ts`),
      serviceTemplate,
    );

    // Generate controller file
    const controllerTemplate = `
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ${modelName}Service } from './${camelModelName}.service';
import { Prisma } from '@prisma/client';

@Controller('${camelModelName}')
export class ${modelName}Controller {
  constructor(private readonly ${camelModelName}Service: ${modelName}Service) {}

  @Post()
  create(@Body() createDto: Prisma.${modelName}CreateInput) {
    return this.${camelModelName}Service.create(createDto);
  }

  @Get()
  findAll() {
    return this.${camelModelName}Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.${camelModelName}Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: Prisma.${modelName}UpdateInput) {
    return this.${camelModelName}Service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.${camelModelName}Service.remove(+id);
  }
}
`.trim();

    fs.writeFileSync(
      path.join(basePath, `${camelModelName}.controller.ts`),
      controllerTemplate,
    );

    // Generate module file
    const moduleTemplate = `
import { Module } from '@nestjs/common';
import { ${modelName}Service } from './${camelModelName}.service';
import { ${modelName}Controller } from './${camelModelName}.controller';

@Module({
  controllers: [${modelName}Controller],
  providers: [${modelName}Service],
})
export class ${modelName}Module {}
`.trim();

    fs.writeFileSync(
      path.join(basePath, `${camelModelName}.module.ts`),
      moduleTemplate,
    );
  });

  console.log("NestJS component files generated successfully.");

  exec("npm run format", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    if (stdout) console.log(`stdout: ${stdout}`);
    if (stderr) console.error(`stderr: ${stderr}`);

    console.log("Files have been formatted.");
  });
}

// Replace './prisma/schema.prisma' with the path to your actual Prisma schema file
generateNestComponentsFromSchema("./prisma/schema.prisma").catch(console.error);
