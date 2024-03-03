import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { createDatabase } from "./db";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  await createDatabase();
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Example app")
    .setDescription("The example API description")
    .setVersion("1.0")
    .addTag("example")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
