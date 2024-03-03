import { Prisma } from "@prisma/client";
export declare class FormTemplateService {
  create(data: Prisma.FormTemplateCreateInput): Promise<{
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  findAll(): Promise<
    ({
      fields: {
        id: number;
        formTemplateId: number;
        label: string;
        fieldType: string;
        placeholder: string;
        required: boolean;
        order: number;
        createdAt: Date;
        updatedAt: Date;
      }[];
    } & {
      id: number;
      name: string;
      description: string;
      createdAt: Date;
      updatedAt: Date;
    })[]
  >;
  findOne(id: number): Promise<
    {
      fields: {
        id: number;
        formTemplateId: number;
        label: string;
        fieldType: string;
        placeholder: string;
        required: boolean;
        order: number;
        createdAt: Date;
        updatedAt: Date;
      }[];
    } & {
      id: number;
      name: string;
      description: string;
      createdAt: Date;
      updatedAt: Date;
    }
  >;
  update(
    id: number,
    data: Prisma.FormTemplateUpdateInput,
  ): Promise<{
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  remove(id: number): Promise<{
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
}
