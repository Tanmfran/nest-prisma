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

function toKebabCase(str) {
  return lowerFirstLetter(str)
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
    .toLowerCase();
}

async function generateNestComponentsFromSchema(schemaPath) {
  const schema = fs.readFileSync(schemaPath, "utf8");
  const dmmf = await getDMMF({ datamodel: schema });
  const basePath = path.resolve(__dirname, "..", "src");

  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath, { recursive: true });
  }

  const appModulePath = path.join(basePath, "app.module.ts");
  let appModuleImports = [];

  dmmf.datamodel.models.forEach((model) => {
    const modelName = model.name;
    const serviceName = `${lowerFirstLetter(modelName)}Service`;
    const controllerName = `${modelName}Controller`;
    const moduleName = `${modelName}Module`;
    const modelFolder = path.join(basePath, toKebabCase(modelName));

    // File import names
    const serviceImportName = toKebabCase(modelName + "Service");
    const moduleImportName = toKebabCase(modelName + "Module");
    const controllerImportName = toKebabCase(modelName + "Controller");

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
      path.join(modelFolder, `${serviceImportName}.ts`),
      serviceTemplate,
    );

    // Generate controller file
    const controllerTemplate = `
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ${modelName}Service } from './${serviceImportName}';

@Controller('${toKebabCase(modelName)}')
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
      path.join(modelFolder, `${controllerImportName}.ts`),
      controllerTemplate,
    );

    // Generate module file
    const moduleTemplate = `
import { Module } from '@nestjs/common';
import { ${controllerName} } from './${controllerImportName}';
import { ${modelName}Service } from './${serviceImportName}';

@Module({
  controllers: [${controllerName}],
  providers: [${modelName}Service],
})
export class ${moduleName} {}
`.trim();

    fs.writeFileSync(
      path.join(modelFolder, `${moduleImportName}.ts`),
      moduleTemplate,
    );

    const folderName = toKebabCase(modelName);
    appModuleImports.push({
      moduleName,
      modulePath: `./${folderName}/${moduleImportName}`,
    });
  });

  console.log("NestJS component files generated successfully.");

  let appModuleContent = fs.readFileSync(appModulePath, "utf8");
  appModuleImports.forEach(({ moduleName, modulePath }) => {
    if (!appModuleContent.includes(moduleName)) {
      const lastImportIndex = 0;
      const importStatement = `\nimport { ${moduleName} } from '${modulePath}';`;
      const importInsertionPoint =
        appModuleContent.indexOf("\n", lastImportIndex) + 1;
      appModuleContent = [
        appModuleContent.slice(0, importInsertionPoint),
        importStatement,
        appModuleContent.slice(importInsertionPoint),
      ].join("");

      const moduleInsertionPoint =
        appModuleContent.indexOf("imports: [") + "imports: [".length;
      const moduleStatement = `\n  ${moduleName},`;
      appModuleContent = [
        appModuleContent.slice(0, moduleInsertionPoint),
        moduleStatement,
        appModuleContent.slice(moduleInsertionPoint),
      ].join("");
    }
  });
  fs.writeFileSync(appModulePath, appModuleContent);

  // Run npm run format to format the generated files
  exec("npm run format", (error) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log("Files have been formatted.");
  });
}

// Replace './prisma/schema.prisma' with the path to your actual Prisma schema file
generateNestComponentsFromSchema("./prisma/schema.prisma").catch(console.error);
