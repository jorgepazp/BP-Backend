import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { User as UserModel, Post as PostModel } from '@prisma/client';
  
@Controller('users')
export class UsersController {
    constructor(private userService:UserService){}
    
    @Get()
    helloUser(){
        return this.userService.users({});
    }
    @Post()
    async signupUser(
      @Body() userData: UserModel,
    ): Promise<UserModel> {
        console.log(userData)
      return this.userService.createUser(userData);
    }
}
