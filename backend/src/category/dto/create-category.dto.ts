import { IsEmpty } from "class-validator";

export class CreateCategoryDto {
    @IsEmpty({message:"Category Name should be filled"})
    CategoryName:string;
    @IsEmpty({message:"Category Name should be filled"})
    CategoryDes:string;
}
