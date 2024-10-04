import { IsNotEmpty } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty({message:"Category Name should be filled"})
    CategoryName:string;
    @IsNotEmpty({message:"Category Name should be filled"})
    CategoryDes:string;
}
