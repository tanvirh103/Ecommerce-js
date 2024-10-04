import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('Category')
export class Category {
    @PrimaryGeneratedColumn()
    CategoryId:number;
    @Column({nullable:false})
    CategoryName:string;
    @Column({nullable:false})
    CategoryDes:string;
}
