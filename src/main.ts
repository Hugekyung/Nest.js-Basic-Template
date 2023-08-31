import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // * Server Root URL
    app.setGlobalPrefix('api/v2');

    // * Server Listen
    const port = Number(process.env.SERVER_PORT);
    await app.listen(port, () => {
        Logger.log(`SERVER - ${port}PORT CONNECTED`);
    });
}
bootstrap();
