import { IsNotEmpty } from "class-validator";

export class AuthDTO{
    @IsNotEmpty({message:"Email should be filled"})
    Email:string;
    @IsNotEmpty({message:"Password should be filled"})
    Password:string;
}