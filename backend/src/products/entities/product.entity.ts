import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  category: string;

  @Column('jsonb', { nullable: true })
  rating?: {
    rate: number;
    count: number;
  };
}