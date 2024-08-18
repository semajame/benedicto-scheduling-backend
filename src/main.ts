import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // app.setGlobalPrefix('bcscheduling');

  // app.enableCors({
  //   origin: 'http://localhost:4200', // Replace with your frontend's origin
  //   credentials: true, // Allow credentials (e.g., cookies) to be sent
  // });

  await app.listen(3000);
}
bootstrap();
