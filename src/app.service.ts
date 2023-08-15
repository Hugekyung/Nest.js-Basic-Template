import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getUserInfo() {
        return { username: 'testUser' };
    }
}
