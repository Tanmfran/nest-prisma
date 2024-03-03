import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { FormTemplate, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

@Injectable()
export class FormTemplateService {
  async create(data: Prisma.FormTemplateCreateInput) {
    return prisma.formTemplate.create({ data });
  }

  async findAll() {
    return prisma.formTemplate.findMany({
      include: { fields: true, Form: true },
    });
  }

  async findOne(id: number) {
    return prisma.formTemplate.findUnique({
      where: { id },
      include: { fields: true, Form: true },
    });
  }

  async update(id: number, data: Prisma.FormTemplateUpdateInput) {
    return prisma.formTemplate.update({ where: { id }, data });
  }

  async remove(id: number) {
    return prisma.formTemplate.delete({ where: { id } });
  }
}
