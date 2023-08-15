import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly appService: AppService) {}

    @Get()
    async getUserInfo() {
        return this.appService.getUserInfo();
    }
}
