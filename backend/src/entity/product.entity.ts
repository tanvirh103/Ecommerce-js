import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('Product')
export class Product {
    @PrimaryGeneratedColumn()
    ProductId:number;
    @Column({nullable:false})
    CategoryId:number;
    @Column({nullable:false})
    ProductName:string;
    @Column({nullable:false})
    ProductDes:string;
    @Column({nullable:false})
    ProductPrice:number;
    @Column({nullable:false})
    ProductQuantity:number;
}
