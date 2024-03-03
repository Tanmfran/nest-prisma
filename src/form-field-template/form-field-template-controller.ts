import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { FormFieldTemplateService } from "./form-field-template-service";

@Controller("form-field-template")
export class FormFieldTemplateController {
  constructor(
    private readonly formFieldTemplateService: FormFieldTemplateService,
  ) {}

  @Post()
  create(@Body() createDto: any) {
    // Consider defining a CreateDto
    return this.formFieldTemplateService.create(createDto);
  }

  @Get()
  findAll() {
    return this.formFieldTemplateService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.formFieldTemplateService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDto: any) {
    // Consider defining an UpdateDto
    return this.formFieldTemplateService.update(+id, updateDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.formFieldTemplateService.remove(+id);
  }
}
