import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FormTemplate, Prisma } from "@prisma/client";

@Injectable()
export class FormTemplateService {
  constructor(private prisma: PrismaService) {}

  async createFormTemplate(
    data: Prisma.FormTemplateCreateInput,
  ): Promise<FormTemplate> {
    return this.prisma.formTemplate.create({ data });
  }

  async formTemplates(): Promise<FormTemplate[]> {
    return this.prisma.formTemplate.findMany({
      include: {
        fields: true, // Include the relation to FormFieldTemplate
      },
    });
  }

  async getFormTemplate(id: number): Promise<FormTemplate | null> {
    return this.prisma.formTemplate.findUnique({
      where: { id },
      include: {
        fields: true, // Include the relation to FormFieldTemplate
      },
    });
  }

  async updateFormTemplate(
    id: number,
    data: Prisma.FormTemplateUpdateInput,
  ): Promise<FormTemplate> {
    return this.prisma.formTemplate.update({
      where: { id },
      data,
    });
  }

  async deleteFormTemplate(id: number): Promise<FormTemplate> {
    return this.prisma.formTemplate.delete({
      where: { id },
    });
  }
}
