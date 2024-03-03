import { FormTemplateService } from "./formTemplate.service";
import { Prisma } from "@prisma/client";
export declare class FormTemplateController {
  private readonly formTemplateService;
  constructor(formTemplateService: FormTemplateService);
  create(createDto: Prisma.FormTemplateCreateInput): Promise<{
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
  findOne(id: string): Promise<
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
    id: string,
    updateDto: Prisma.FormTemplateUpdateInput,
  ): Promise<{
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  remove(id: string): Promise<{
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
}
