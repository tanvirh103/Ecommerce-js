import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entity/product.entity';
import { Repository } from 'typeorm';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private readonly ProductRepo:Repository<Product>){}
  async create(createProductDto: CreateProductDto):Promise<boolean> {
    const addproduct=new Product();
    addproduct.ProductName=createProductDto.ProductName;
    addproduct.ProductDes=createProductDto.ProductDes;
    addproduct.ProductPrice=createProductDto.ProductPrice;
    addproduct.ProductQuantity=createProductDto.ProductQuantity;
    addproduct.CategoryId=createProductDto.CategoryId;
    const res=await this.ProductRepo.save(addproduct);
    if(res){
      return true;
    }else{
      return false;
    }
  }

  async findAll():Promise<any> {
    const res=await this.ProductRepo.find({});
    if(res.length>0){
      return res;
    }else{
      return {message:"No Product Found"}
    }
  }

  async findOne(id: number):Promise<any> {
    const res=await this.ProductRepo.findOne({where:{ProductId:id}})
    if(res!=null){
      return res;
    }else{
      return{message:"No Product found"} ;
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto):Promise<boolean> {
    const res=await this.ProductRepo.findOne({where:{ProductId:id}});
    if(res!=null){
      res.CategoryId=updateProductDto.CategoryId;
      res.ProductDes=updateProductDto.ProductDes;
      res.ProductName=updateProductDto.ProductName;
      res.ProductPrice=updateProductDto.ProductPrice;
      res.ProductQuantity=updateProductDto.ProductQuantity;
      const f=await this.ProductRepo.update(res.ProductId,res);
      if(f){
        return true;
      }else{
        return false;
      }
    }
  }

  async remove(id: number):Promise<boolean> {
    const find=await this.ProductRepo.findOne({where:{ProductId:id}});
    if(find!=null){
      const res=await this.ProductRepo.remove(find);
      if(res){
        return true;
      }else return false;
    }
  }
}
