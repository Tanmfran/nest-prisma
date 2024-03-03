import { Prisma } from "@prisma/client";
export declare class FormFieldValueService {
  create(data: Prisma.FormFieldValueCreateInput): Promise<{
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
  findOne(id: number): Promise<{
    id: number;
    formId: number;
    fieldTemplateId: number;
    value: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  update(
    id: number,
    data: Prisma.FormFieldValueUpdateInput,
  ): Promise<{
    id: number;
    formId: number;
    fieldTemplateId: number;
    value: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  remove(id: number): Promise<{
    id: number;
    formId: number;
    fieldTemplateId: number;
    value: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
}
