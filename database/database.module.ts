import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: process.env.DB_SYNCHRONIZE ? Boolean(process.env.DB_SYNCHRONIZE) : false,
        }),
    ],
})
export class DatabaseModule {}
