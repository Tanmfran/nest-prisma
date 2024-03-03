import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { FormFieldValueService } from "./form-field-value-service";

@Controller("form-field-value")
export class FormFieldValueController {
  constructor(private readonly formFieldValueService: FormFieldValueService) {}

  @Post()
  create(@Body() createDto: any) {
    // Consider defining a CreateDto
    return this.formFieldValueService.create(createDto);
  }

  @Get()
  findAll() {
    return this.formFieldValueService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.formFieldValueService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDto: any) {
    // Consider defining an UpdateDto
    return this.formFieldValueService.update(+id, updateDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.formFieldValueService.remove(+id);
  }
}
