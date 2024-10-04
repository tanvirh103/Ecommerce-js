import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsEmpty } from 'class-validator';
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @IsEmpty({message:"Category Name should be filled"})
    CategoryName:string;
    @IsEmpty({message:"Category Name should be filled"})
    CategoryDes:string;
}
