import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { Form, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

@Injectable()
export class FormService {
  async create(data: Prisma.FormCreateInput) {
    return prisma.form.create({ data });
  }

  async findAll() {
    return prisma.form.findMany({
      include: { fields: true, formTemplate: true },
    });
  }

  async findOne(id: number) {
    return prisma.form.findUnique({
      where: { id },
      include: { fields: true, formTemplate: true },
    });
  }

  async update(id: number, data: Prisma.FormUpdateInput) {
    return prisma.form.update({ where: { id }, data });
  }

  async remove(id: number) {
    return prisma.form.delete({ where: { id } });
  }
}
