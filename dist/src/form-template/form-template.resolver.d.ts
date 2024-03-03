import { FormTemplateService } from './form-template.service';
export declare class FormTemplateResolver {
    private readonly formTemplateService;
    constructor(formTemplateService: FormTemplateService);
    findAll(): Promise<{
        id: number;
        name: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
