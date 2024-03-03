import { Module } from "@nestjs/common";
import { FormTemplateService } from "./form-template.service";
import { FormTemplateController } from "./form-template.controller";
import { FormTemplateResolver } from "./form-template.resolver";

@Module({
  providers: [FormTemplateService, FormTemplateResolver],
  controllers: [FormTemplateController],
})
export class FormTemplateModule {}
