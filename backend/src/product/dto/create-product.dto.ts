import {IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty({message:"Category Id should be filled"})
    CategoryId:number;
    @IsNotEmpty({message:"Product Name should be filled"})
    @IsString()
    ProductName:string;
    @IsNotEmpty({message:"Product Description should be filled"})
    @IsString()
    ProductDes:string;
    @IsNotEmpty({message:"Product Price should be filled"})
    //@IsNumber()
    ProductPrice:number;
    @IsNotEmpty({message:"Product Quantity should be filled"})
    //@IsNumber()
    ProductQuantity:number;
}
