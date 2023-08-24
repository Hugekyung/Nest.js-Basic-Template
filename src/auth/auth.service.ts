import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    getUserInfo() {
        return { username: 'testUser' };
    }
}
