import { IsEmail, IsEmpty, MinLength } from "class-validator";

export class UpdateUserDTO{
    @IsEmpty({message:"UserName should be filled"})
    UserName:string;
    @IsEmpty({message:"Email should be filled"})
    @IsEmail()
    Email:string;
    @IsEmpty({message:"Phone should be filled"})
    Phone:string;
    @IsEmpty({message:"Password should be filled"})
    @MinLength(8,{message:"Should not be less than 8 char"})
    Password:string;
    @IsEmpty({message:"Cpassword should be filled"})
    CPassword:string;
    @IsEmpty({message:"Role should be filled"})
    Role:string;
}