import { IsEmail, IsNotEmpty, MinLength } from "class-validator";


export class ViewUser{
    UserId:number;
    @IsNotEmpty({message:"UserName should be filled"})
    UserName:string;
    @IsNotEmpty({message:"Email should be filled"})
    @IsEmail()
    Email:string;
    @IsNotEmpty({message:"Phone should be filled"})
    Phone:string;
    @IsNotEmpty({message:"Password should be filled"})
    @MinLength(8,{message:"Should not be less than 8 char"})
    Password:string;
    @IsNotEmpty({message:"Cpassword should be filled"})
    CPassword:string;
    @IsNotEmpty({message:"Role should be filled"})
    Role:string;
}