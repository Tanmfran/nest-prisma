import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { FormTemplateService } from "./form-template-service";

@Controller("form-template")
export class FormTemplateController {
  constructor(private readonly formTemplateService: FormTemplateService) {}

  @Post()
  create(@Body() createDto: any) {
    // Consider defining a CreateDto
    return this.formTemplateService.create(createDto);
  }

  @Get()
  findAll() {
    return this.formTemplateService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.formTemplateService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDto: any) {
    // Consider defining an UpdateDto
    return this.formTemplateService.update(+id, updateDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.formTemplateService.remove(+id);
  }
}
