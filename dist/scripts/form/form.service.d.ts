import { Prisma } from "@prisma/client";
export declare class FormService {
  create(data: Prisma.FormCreateInput): Promise<{
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
  findOne(id: number): Promise<
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
    id: number,
    data: Prisma.FormUpdateInput,
  ): Promise<{
    id: number;
    formTemplateId: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  remove(id: number): Promise<{
    id: number;
    formTemplateId: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
}
