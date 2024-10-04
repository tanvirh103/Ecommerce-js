import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    try{
      const res= this.productService.create(createProductDto);
    if(res){
      return {message:"Product Added"}
    }else{
      return {message:"Product Creation failed"}
    }
    }catch(err){
      console.log(err);
    }
    
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    try{
      const res= this.productService.update(id, updateProductDto);
    if(res){
      return {message:"Product Updated"}
    }else{
      return {message:"Product Update failed"}
    }
    }catch(e){
      console.log(e);
    }
    
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    const res= this.productService.remove(id);
    if(res){
      return {message:"Product Deleted"}
    }else{
      return {message:"Product Deletion failed"}
    }
  }
}
