import { Query, Resolver } from '@nestjs/graphql';
import { FormTemplateService } from './form-template.service';
import {FormTemplate} from "./form-template";


@Resolver(() => FormTemplate)
export class FormTemplateResolver {
    constructor(private readonly formTemplateService: FormTemplateService) {}

    @Query(() => [FormTemplate], { name: 'formTemplates' })
    findAll() {
        return this.formTemplateService.formTemplates();
    }

    // Additional queries and mutations
}
