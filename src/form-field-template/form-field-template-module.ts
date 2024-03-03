import { Module } from "@nestjs/common";
import { FormFieldTemplateController } from "./form-field-template-controller";
import { FormFieldTemplateService } from "./form-field-template-service";

@Module({
  controllers: [FormFieldTemplateController],
  providers: [FormFieldTemplateService],
})
export class FormFieldTemplateModule {}
