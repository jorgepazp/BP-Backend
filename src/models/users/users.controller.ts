import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel, Post as PostModel } from '@prisma/client';
import { AuthService } from 'src/auth/auth.service';
  
@Controller('users')
export class UsersController {
    constructor(
      private userService:UserService,
      private authService:AuthService){}
    
    @Get()
    helloUser(){
        return this.userService.users({});
    }

    @Post()
    async signupUser(
      @Body() userData: UserModel,
    ): Promise<UserModel> {
        console.log(userData)
        const hash = await this.authService.makeHashPassword(userData.password)
        userData.password = hash;
        console.log(hash)
      return this.userService.createUser(userData);
    }
}
