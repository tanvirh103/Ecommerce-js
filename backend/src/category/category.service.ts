import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entity/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  static find: any;
  static findOne: any;
  constructor(@InjectRepository(Category)private readonly CategoryRepo:Repository<Category>){}
  async create(createCategoryDto: CreateCategoryDto):Promise<boolean> {
    const addcategory=new Category();
    addcategory.CategoryName=createCategoryDto.CategoryName;
    addcategory.CategoryDes=createCategoryDto.CategoryDes;
    const res=await this.CategoryRepo.save(addcategory);
    if(res){
      return true;
    }else return false;
  }

  async findAll():Promise<any> {
    const res=await this.CategoryRepo.find({});
    if(res.length>0){
      return res;
    }else{
      return false;
    }
  }

  async findOne(id: number):Promise<any> {
    const res=await  this.CategoryRepo.findOne({where:{CategoryId:id}})
    if(res!=null){
      return res;
    }else{
      return false;
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto):Promise<boolean> {
    const res=await this.CategoryRepo.findOne({where:{CategoryId:id}})
    if(res!=null){
      res.CategoryName=updateCategoryDto.CategoryName;
      res.CategoryDes=updateCategoryDto.CategoryDes;
      const f=await this.CategoryRepo.update(res.CategoryId,res);
      if(f){
        return true;
      }else{
        return false;
      }
    }
     
  }

  async remove(id: number):Promise<boolean> {
    const res=await this.CategoryRepo.findOne({where:{CategoryId:id}});
    if(res!=null){
      const f=await this.CategoryRepo.remove(res);
      if(f){
        return true;
      }else{
        return false;
      }
    }
  }
}
