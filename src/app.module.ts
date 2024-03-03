import { Module } from "@nestjs/common";

import { FormFieldValueModule } from "./form-field-value/form-field-value-module";
import { FormModule } from "./form/form-module";
import { FormFieldTemplateModule } from "./form-field-template/form-field-template-module";
import { FormTemplateModule } from "./form-template/form-template-module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaModule } from "./prisma/prisma.module";
import { LoggerService } from "./logger/logger.service";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";

@Module({
  imports: [
    FormFieldValueModule,
    FormModule,
    FormFieldTemplateModule,
    FormTemplateModule,
    PrismaModule,
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: "src/graphql/schema.gql", // This will generate the schema automatically
    //   sortSchema: true,
    //   playground: false, // Disable playground
    //   plugins: [ApolloServerPluginLandingPageLocalDefault()],
    // }),
    // other modules
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, LoggerService],
})
export class AppModule {}
