import { FormFieldValueService } from "./formFieldValue.service";
import { Prisma } from "@prisma/client";
export declare class FormFieldValueController {
  private readonly formFieldValueService;
  constructor(formFieldValueService: FormFieldValueService);
  create(createDto: Prisma.FormFieldValueCreateInput): Promise<{
    id: number;
    formId: number;
    fieldTemplateId: number;
    value: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  findAll(): Promise<
    {
      id: number;
      formId: number;
      fieldTemplateId: number;
      value: string;
      createdAt: Date;
      updatedAt: Date;
    }[]
  >;
  findOne(id: string): Promise<{
    id: number;
    formId: number;
    fieldTemplateId: number;
    value: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  update(
    id: string,
    updateDto: Prisma.FormFieldValueUpdateInput,
  ): Promise<{
    id: number;
    formId: number;
    fieldTemplateId: number;
    value: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  remove(id: string): Promise<{
    id: number;
    formId: number;
    fieldTemplateId: number;
    value: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
}
