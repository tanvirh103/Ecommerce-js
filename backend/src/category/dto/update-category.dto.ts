import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsNotEmpty } from 'class-validator';
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @IsNotEmpty({message:"Category Name should be filled"})
    CategoryName:string;
    @IsNotEmpty({message:"Category Name should be filled"})
    CategoryDes:string;
}
