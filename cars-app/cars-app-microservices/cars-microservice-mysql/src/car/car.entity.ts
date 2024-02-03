import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    model: string;

    @Column()
    year: number;

    @Column()
    image: string;
}