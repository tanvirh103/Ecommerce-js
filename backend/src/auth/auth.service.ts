import { Injectable } from '@nestjs/common';
import { AuthDTO } from './dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User)private readonly UserRepo:Repository<User>){}
    async login(login:AuthDTO):Promise<boolean>{
        const find=await this.UserRepo.findOneBy({Email:login.Email});
        if(find){
            if(find.Password==login.Password){
                return true;
            }else{
                return false;
            }
        }
    }
}
