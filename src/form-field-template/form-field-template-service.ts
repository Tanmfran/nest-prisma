import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { FormFieldTemplate, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

@Injectable()
export class FormFieldTemplateService {
  async create(data: Prisma.FormFieldTemplateCreateInput) {
    return prisma.formFieldTemplate.create({ data });
  }

  async findAll() {
    return prisma.formFieldTemplate.findMany({
      include: { formTemplate: true, FormFieldValue: true },
    });
  }

  async findOne(id: number) {
    return prisma.formFieldTemplate.findUnique({
      where: { id },
      include: { formTemplate: true, FormFieldValue: true },
    });
  }

  async update(id: number, data: Prisma.FormFieldTemplateUpdateInput) {
    return prisma.formFieldTemplate.update({ where: { id }, data });
  }

  async remove(id: number) {
    return prisma.formFieldTemplate.delete({ where: { id } });
  }
}
