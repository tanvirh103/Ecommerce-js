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
      return await this.productService.create(createProductDto);
    }catch(err){
      console.log(err);
    } 
  }

  @Get()
  async findAll() {
     return await this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.productService.findOne(id); 
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    try{
      return await this.productService.update(id, updateProductDto);
    }catch(e){
      console.log(e);
    }
    
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
     return await this.productService.remove(id);
  }
}
