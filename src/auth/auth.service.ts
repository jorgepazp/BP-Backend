import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/models/users/user.service';
const salt = 10;
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService,
    private jwtService: JwtService) {}

  comparePassword = async (pass:string,hash:string)=>{await bcrypt.compare(pass,hash)};

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.user(username);
    this.comparePassword(pass,user.password).then(x=>{
      return Promise.resolve("User logged in")
    },err=>{
      console.error(err);
      return Promise.reject("Auth failed")
    })
  }

  async makeHashPassword(password:string): Promise<string>{
    console.log(password,salt)
    return bcrypt.hash(password,salt);
  }

  async login(user:any){
    console.log(user);
    let payload = { username: user.username,sub:user.userId};
    return{
      access_token: this.jwtService.sign(payload)
    };
  }

}