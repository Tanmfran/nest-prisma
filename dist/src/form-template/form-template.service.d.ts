import { PrismaService } from "../prisma/prisma.service";
import { FormTemplate, Prisma } from "@prisma/client";
export declare class FormTemplateService {
  private prisma;
  constructor(prisma: PrismaService);
  createFormTemplate(
    data: Prisma.FormTemplateCreateInput,
  ): Promise<FormTemplate>;
  formTemplates(): Promise<FormTemplate[]>;
  getFormTemplate(id: number): Promise<FormTemplate | null>;
  updateFormTemplate(
    id: number,
    data: Prisma.FormTemplateUpdateInput,
  ): Promise<FormTemplate>;
  deleteFormTemplate(id: number): Promise<FormTemplate>;
}
