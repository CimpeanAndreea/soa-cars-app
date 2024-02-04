import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); //Prefix for all API endpoints
  app.enableCors(); //Enable cors on API calls
  await app.listen(8000); //Listen port of the app
}
bootstrap();
