import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma/prisma.service";
import { FormTemplateModule } from './form-template/form-template.module';
import {PrismaModule} from "./prisma/prisma.module";

@Module({
  imports: [FormTemplateModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
