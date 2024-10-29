// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   app.enableCors();

//   // app.setGlobalPrefix('bcscheduling');

//   // app.enableCors({
//   //   origin: 'http://localhost:4200', // Replace with your frontend's origin
//   //   credentials: true, // Allow credentials (e.g., cookies) to be sent
//   // });

//   await app.listen(4000);
// }
// bootstrap();
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // Set CORS dynamically based on environment
//   const origin =
//     process.env.NODE_ENV === 'production'
//       ? 'https://bc-scheduling-1024.vercel.app' // Replace with your production frontend URL
//       : 'http://localhost:4200'; // Replace with your local frontend URL

//   app.enableCors({
//     origin,
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Allow credentials (e.g., cookies) to be sent
//   });

//   // Listen on the port from the environment or default to 4000
//   await app.listen(process.env.PORT || 4000);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set a default NODE_ENV if not defined
  const env = process.env.NODE_ENV || 'development';

  // Set CORS dynamically based on environment
  const origin =
    env === 'production'
      ? 'https://bc-scheduling-1024.vercel.app' // Replace with your production frontend URL
      : 'http://localhost:4200'; // Replace with your local frontend URL

  app.enableCors({
    origin,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials (e.g., cookies) to be sent
  });

  // Listen on the port from the environment or default to 4000

  await app.listen(4000);
}
bootstrap();
