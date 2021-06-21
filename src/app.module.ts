import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/users/users.controller';
import { PrismaService } from './services/prisma/prisma.service';
import { UserService } from './services/user/user.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './services/auth/auth.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController,UsersController],
  providers: [AppService, PrismaService, AuthService],
})
export class AppModule {}
