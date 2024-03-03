import { FormService } from "./form.service";
import { Prisma } from "@prisma/client";
export declare class FormController {
  private readonly formService;
  constructor(formService: FormService);
  create(createDto: Prisma.FormCreateInput): Promise<{
    id: number;
    formTemplateId: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  findAll(): Promise<
    ({
      fields: {
        id: number;
        formId: number;
        fieldTemplateId: number;
        value: string;
        createdAt: Date;
        updatedAt: Date;
      }[];
    } & {
      id: number;
      formTemplateId: number;
      name: string;
      createdAt: Date;
      updatedAt: Date;
    })[]
  >;
  findOne(id: string): Promise<
    {
      fields: {
        id: number;
        formId: number;
        fieldTemplateId: number;
        value: string;
        createdAt: Date;
        updatedAt: Date;
      }[];
    } & {
      id: number;
      formTemplateId: number;
      name: string;
      createdAt: Date;
      updatedAt: Date;
    }
  >;
  update(
    id: string,
    updateDto: Prisma.FormUpdateInput,
  ): Promise<{
    id: number;
    formTemplateId: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  remove(id: string): Promise<{
    id: number;
    formTemplateId: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
}
