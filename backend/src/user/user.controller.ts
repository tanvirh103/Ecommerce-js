import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { UpdateUserDTO } from './dto/update.user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  CreateUser(@Body() c:UserDTO){
    const res=this.userService.CreateUser(c);
    if(res){
      return {message:"User added"}
    }else return {message:"Something went wrong"}
  }
  @Get(':id')
  Find(@Param('id')id:number){
    return this.userService.find(id);
  }
  @Get()
  FindAll(){
    return this.userService.findAll();
  }
  @Delete(':id')
  DeleteUser(@Param('id') id:number){
    return this.userService.deleteUser(id);
  }
  @Patch(':id')
  UpdateUser(@Param('id') id:number,@Body() update:UpdateUserDTO){
    return this.userService.update(id,update);
  }
  
}
