import { NestFactory } from '@nestjs/core';
import { NextFunction } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const writeLog = (req: Request, res: Response, next: NextFunction) => {
    console.log(`Route: ${req.url}`);
    console.log(`Method: ${req.method}`);
    console.log(`header: ${JSON.stringify(req.headers)}`);
    console.log('--------')
    next();
  };

  app.use(writeLog);

  await app.listen(3333);
}
bootstrap();
