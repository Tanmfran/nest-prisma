import { FormFieldTemplateService } from "./formFieldTemplate.service";
import { Prisma } from "@prisma/client";
export declare class FormFieldTemplateController {
  private readonly formFieldTemplateService;
  constructor(formFieldTemplateService: FormFieldTemplateService);
  create(createDto: Prisma.FormFieldTemplateCreateInput): Promise<{
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
  findOne(id: string): Promise<{
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
    id: string,
    updateDto: Prisma.FormFieldTemplateUpdateInput,
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
  remove(id: string): Promise<{
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
