import { forwardRef, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { PrismaModule } from 'src/config/prisma/prisma.module';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { UserService } from './user.service';
import { UsersController } from './users.controller';

@Module({
    controllers:[UsersController],
    imports:[forwardRef(()=>AuthModule)],
    providers:[UserService,PrismaService],
    exports:[UserService]
})
export class UsersModule {}
