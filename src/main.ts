import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { createDatabase } from "./db";

async function bootstrap() {
  await createDatabase();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
