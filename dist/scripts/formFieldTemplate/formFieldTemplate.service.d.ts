import { Prisma } from "@prisma/client";
export declare class FormFieldTemplateService {
  create(data: Prisma.FormFieldTemplateCreateInput): Promise<{
    id: number;
    formTemplateId: number;
    label: string;
    fieldType: string;
    placeholder: string;
    required: boolean;
    order: number;
    createdAt: Date;
    updatedAt: Date;
  }>;
  findAll(): Promise<
    {
      id: number;
      formTemplateId: number;
      label: string;
      fieldType: string;
      placeholder: string;
      required: boolean;
      order: number;
      createdAt: Date;
      updatedAt: Date;
    }[]
  >;
  findOne(id: number): Promise<{
    id: number;
    formTemplateId: number;
    label: string;
    fieldType: string;
    placeholder: string;
    required: boolean;
    order: number;
    createdAt: Date;
    updatedAt: Date;
  }>;
  update(
    id: number,
    data: Prisma.FormFieldTemplateUpdateInput,
  ): Promise<{
    id: number;
    formTemplateId: number;
    label: string;
    fieldType: string;
    placeholder: string;
    required: boolean;
    order: number;
    createdAt: Date;
    updatedAt: Date;
  }>;
  remove(id: number): Promise<{
    id: number;
    formTemplateId: number;
    label: string;
    fieldType: string;
    placeholder: string;
    required: boolean;
    order: number;
    createdAt: Date;
    updatedAt: Date;
  }>;
}
