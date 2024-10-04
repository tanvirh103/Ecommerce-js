import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';
import { UpdateUserDTO } from './dto/update.user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly UserRepo:Repository<User>){}
    async CreateUser(userdto:UserDTO):Promise<any>{
        if(userdto.Password==userdto.CPassword){
            const user=new User();
            user.UserName=userdto.UserName;
            user.Email=userdto.Email;
            user.Phone=userdto.Phone;
            user.Password=userdto.Password;
            user.Role=userdto.Role;
            const res=await this.UserRepo.save(user);
            if(res){
                return true;
            }else{
                return false;
            }
        }else{
            return {message:"Password did not match"}
        }
    }

    async find(id:number):Promise<any>{
        const res=await this.UserRepo.find({where:{UserId:id}})
        if(res.length>0){
         return res;   
        }else{
            return {message:"No User found"}
        }
    }

    async findAll():Promise<Array<User>>{
        const res=await this.UserRepo.find();
        if(res.length>0){
            return res;
        }
    }
    
    async update(id:number,updateUser:UpdateUserDTO):Promise<any>{
        if(updateUser.Password!=updateUser.CPassword){
            return {message:"Password did not match"}
        }
        const find=await this.UserRepo.findOne({where:{UserId:id}});
        if(find){
            find.UserName=updateUser.UserName;
            find.Email=updateUser.Email;
            find.Phone=updateUser.Phone;
            find.Password=updateUser.Password;
            find.Role=updateUser.Role;
            const res=await this.UserRepo.update(find.UserId,find);
            if(res){
                return true;
            }else return false;
        }
    }

    async deleteUser(id:number):Promise<boolean>{
        const find=await this.UserRepo.find({where:{UserId:id}})
        if(find!=null){
            const res=await this.UserRepo.remove(find);
            if(res){
                return true;
            }else return false;
        }
    }
}
