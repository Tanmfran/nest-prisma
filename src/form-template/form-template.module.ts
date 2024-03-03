import { Module } from '@nestjs/common';
import { FormTemplateService } from './form-template.service';
import { FormTemplateController } from './form-template.controller';

@Module({
  providers: [FormTemplateService],
  controllers: [FormTemplateController]
})
export class FormTemplateModule {}
