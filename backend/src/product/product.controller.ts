import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
@UsePipes(ValidationPipe)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    try{
      const res=await this.productService.create(createProductDto);
    if(res===true){
      return {message:"Product Added"}
    }else{
      return {message:"Product Creation failed"}
    }
    }catch(err){
      console.log(err);
    }
    
  }

  @Get()
  async findAll() {
    const res=await this.productService.findAll();
    if(res===false){
      return{message:"No product found"}
    }else{
      return res;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const res=await this.productService.findOne(id);
    if(res===false){
      return{message:"No Product found"}
    }else{
      return res;
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    try{
      const res=await this.productService.update(id, updateProductDto);
    if(res===true){
      return {message:"Product Updated"}
    }else{
      return {message:"Product Update failed"}
    }
    }catch(e){
      console.log(e);
    }
    
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const res=await this.productService.remove(id);
    if(res===true){
      return {message:"Product Deleted"}
    }else{
      return {message:"Product Deletion failed"}
    }
  }
}
