import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { UserService } from 'src/models/users/user.service';
import { UsersModule } from 'src/models/users/users.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';

@Module({
    imports:[
        PassportModule,
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions:{expiresIn:'60s'}
    })],
    providers:[AuthService,UserService,PrismaService,LocalStrategy],
    exports:[AuthService, JwtModule]
})
export class AuthModule {}
