import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma/prisma.service";
import { FormTemplateModule } from './form-template/form-template.module';
import {PrismaModule} from "./prisma/prisma.module";
import {LoggerService} from "./logger/logger.service";

@Module({
  imports: [FormTemplateModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, LoggerService],
})
export class AppModule {}
