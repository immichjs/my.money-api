import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column('date', { default: new Date() })
  createdAt: Date;

  @Column('date', { default: new Date() })
  updtedAt: Date;

  @ManyToOne(() => User, (user) => user.categories)
  user: User;
}
