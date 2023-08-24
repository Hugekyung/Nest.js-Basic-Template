import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [AuthModule, DatabaseModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
