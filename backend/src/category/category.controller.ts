import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
@UsePipes(ValidationPipe)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    const res=await this.categoryService.create(createCategoryDto);
    if(res===true){
      return {message:"Category Added"}
    }else{
      return {message:"Category creation failed"}
    }
  }

  @Get()
  async findAll() {
    const res=await this.categoryService.findAll();
    if(res===false){
      return {message:"No Category Found"}
    }else{
      return res;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const res=await this.categoryService.findOne(id);
    if(res===false){
      return {message:"No Category found"}
    }else{
      return res;
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
    const res=await this.categoryService.update(id, updateCategoryDto);
    if(res===true){
      return {message:"Category Updated"}
    }else{
      return {message:"Category Update failed"}
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const res=await this.categoryService.remove(id);
    if(res===true){
      return {message:"Category Deleted"}
    }else{
      return {message:"Category deletion failed"}
    }
  }
}
