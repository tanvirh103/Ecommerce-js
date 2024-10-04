import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    const res= this.categoryService.create(createCategoryDto);
    if(res){
      return {message:"Category Added"}
    }else{
      return {message:"Category creation failed"}
    }
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.categoryService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
    const res= this.categoryService.update(id, updateCategoryDto);
    if(res){
      return {message:"Category Updated"}
    }else{
      return {message:"Category Update failed"}
    }
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    const res= this.categoryService.remove(id);
    if(res){
      return {message:"Category Deleted"}
    }else{
      return {message:"Category deletion failed"}
    }
  }
}
