import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly appService: AppService) {} // ! private appService 부분이 어떤 원리로 의존성 주입이 되는 건지 찾아보기 !

    @Get()
    async getUserInfo() {
        return this.appService.getUserInfo();
    }
}
