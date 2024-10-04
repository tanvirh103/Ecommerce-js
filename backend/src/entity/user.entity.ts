import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('User')
export class User{
    @PrimaryGeneratedColumn()
    UserId:number;
    @Column({nullable:false,unique:true})
    UserName:string;
    @Column({nullable:false,unique:true})
    Email:string;
    @Column({nullable:false})
    Phone:string;
    @Column({nullable:false})
    Password:string;
    @Column({nullable:false})
    Role:string;
}