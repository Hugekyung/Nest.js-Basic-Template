import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {} // ! private appService 부분이 어떤 원리로 의존성 주입이 되는 건지 찾아보기 !

    @Get()
    async getUserInfo() {
        return this.authService.getUserInfo();
    }
}
