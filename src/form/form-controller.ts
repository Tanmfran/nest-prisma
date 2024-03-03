import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { FormService } from "./form-service";

@Controller("form")
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  create(@Body() createDto: any) {
    // Consider defining a CreateDto
    return this.formService.create(createDto);
  }

  @Get()
  findAll() {
    return this.formService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.formService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDto: any) {
    // Consider defining an UpdateDto
    return this.formService.update(+id, updateDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.formService.remove(+id);
  }
}
