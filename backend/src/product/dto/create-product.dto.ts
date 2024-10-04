import { isAlpha, IsAlpha, IsEmpty } from "class-validator";

export class CreateProductDto {
    @IsEmpty({message:"Category Id should be filled"})
    CategoryId:number;
    @IsEmpty({message:"Product Name should be filled"})
    ProductName:string;
    @IsEmpty({message:"Product Description should be filled"})
    ProductDes:string;
    @IsEmpty({message:"Product Price should be filled"})
    @IsAlpha()
    ProductPrice:number;
    @IsEmpty({message:"Product Quantity should be filled"})
    @IsAlpha()
    ProductQuantity:number;
}
