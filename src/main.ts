import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaExceptionFilter } from './common/filters/prisma-exception.filter';
// import { DateFormatInterceptor } from './common/interceptors/date-format.interceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
            transformOptions: {
            enableImplicitConversion: true,
            },
        })
    );

    app.enableCors({
        origin: '*',
    });

    app.useGlobalFilters(new PrismaExceptionFilter());
    // app.useGlobalInterceptors(new DateFormatInterceptor());
    app.setGlobalPrefix('api');

    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`Server is running on port ${port}`);
}

bootstrap();