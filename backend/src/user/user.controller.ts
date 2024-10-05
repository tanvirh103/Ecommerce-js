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
      return await this.userService.CreateUser(c);
    }catch(e){
      console.log(e);
    }
  }
  @Get(':id')
  async Find(@Param('id')id:number){
    return await this.userService.find(id);
  }
  @Get()
  async FindAll(){
    return await this.userService.findAll();
    
  }
  @Delete(':id')
  async DeleteUser(@Param('id') id:number){
    return await this.userService.deleteUser(id);
  }
  @Patch(':id')
  async UpdateUser(@Param('id') id:number,@Body() update:UpdateUserDTO){
    return await this.userService.update(id,update);
  }
  
}
