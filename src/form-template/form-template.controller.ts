import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FormTemplateService } from './form-template.service';
import { FormTemplate } from '@prisma/client';

@Controller('form-templates')
export class FormTemplateController {
    constructor(private readonly formTemplateService: FormTemplateService) {}

    @Post()
    async create(@Body() formData: any): Promise<FormTemplate> {
        return this.formTemplateService.createFormTemplate(formData);
    }

    @Get()
    async findAll(): Promise<FormTemplate[]> {
        return this.formTemplateService.formTemplates();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<FormTemplate | null> {
        return this.formTemplateService.getFormTemplate(+id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() formData: any): Promise<FormTemplate> {
        return this.formTemplateService.updateFormTemplate(+id, formData);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<FormTemplate> {
        return this.formTemplateService.deleteFormTemplate(+id);
    }
}
