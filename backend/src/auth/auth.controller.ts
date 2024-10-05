import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';
@UsePipes(ValidationPipe)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  async login(@Body()l:AuthDTO){
    const res=await this.authService.login(l);
    if(res===true){
      return {message:"User Logged In"}
    }else{
      return {message:"Login failed"}
    }
  }
}
