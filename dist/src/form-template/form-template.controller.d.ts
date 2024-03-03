import { FormTemplateService } from './form-template.service';
import { FormTemplate } from '@prisma/client';
export declare class FormTemplateController {
    private readonly formTemplateService;
    constructor(formTemplateService: FormTemplateService);
    create(formData: any): Promise<FormTemplate>;
    findAll(): Promise<FormTemplate[]>;
    findOne(id: string): Promise<FormTemplate | null>;
    update(id: string, formData: any): Promise<FormTemplate>;
    remove(id: string): Promise<FormTemplate>;
}
