import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { FormFieldValue, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

@Injectable()
export class FormFieldValueService {
  async create(data: Prisma.FormFieldValueCreateInput) {
    return prisma.formFieldValue.create({ data });
  }

  async findAll() {
    return prisma.formFieldValue.findMany({
      include: { form: true, fieldTemplate: true },
    });
  }

  async findOne(id: number) {
    return prisma.formFieldValue.findUnique({
      where: { id },
      include: { form: true, fieldTemplate: true },
    });
  }

  async update(id: number, data: Prisma.FormFieldValueUpdateInput) {
    return prisma.formFieldValue.update({ where: { id }, data });
  }

  async remove(id: number) {
    return prisma.formFieldValue.delete({ where: { id } });
  }
}
