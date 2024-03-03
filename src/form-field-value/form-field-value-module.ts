import { Module } from "@nestjs/common";
import { FormFieldValueController } from "./form-field-value-controller";
import { FormFieldValueService } from "./form-field-value-service";

@Module({
  controllers: [FormFieldValueController],
  providers: [FormFieldValueService],
})
export class FormFieldValueModule {}
