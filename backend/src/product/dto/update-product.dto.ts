import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsAlpha, IsNotEmpty } from "class-validator";
export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsNotEmpty({message:"Category Id should be filled"})
    CategoryId:number;
    @IsNotEmpty({message:"Product Name should be filled"})
    ProductName:string;
    @IsNotEmpty({message:"Product Price should be filled"})
    @IsAlpha()
    ProductPrice:number;
    @IsNotEmpty({message:"Product Quantity should be filled"})
    @IsAlpha()
    ProductQuantity:number;
}
