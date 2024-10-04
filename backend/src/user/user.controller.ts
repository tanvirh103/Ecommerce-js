import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { UpdateUserDTO } from './dto/update.user.dto';
@UsePipes(new ValidationPipe({transform:true}))
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async CreateUser(@Body() c:UserDTO){
    try{
      const res=await this.userService.CreateUser(c);
      console.log(res)
      if(res===true){
        return {message:"User added"}
      }else return {message:"Something went wrong"}
    }catch(e){
      console.log(e);
    }
  }
  @Get(':id')
  async Find(@Param('id')id:number){
    const res=await this.userService.find(id);
    if(res===false){
      return {message:"No User found"}
    }else{
      return res;
    }
  }
  @Get()
  async FindAll(){
    const res=await this.userService.findAll();
    if(res===false){
      return {message:"No User Found"};
    }else{
      return res;
    }
  }
  @Delete(':id')
  async DeleteUser(@Param('id') id:number){
    const res=await this.userService.deleteUser(id);
    if(res===true){
      return {message:"User Deleted"}
    }else{
      return {message:"Something is wrong"}
    }
  }
  @Patch(':id')
  async UpdateUser(@Param('id') id:number,@Body() update:UpdateUserDTO){
    const res=await this.userService.update(id,update);
    if(res===true){
      return{message:"User info Updated"}
    }else{
      return{message:"Something is wrong"}
    }
  }
  
}
