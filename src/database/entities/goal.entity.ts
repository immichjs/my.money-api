import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('goals')
export class Goal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: false })
  balanceRequired: number;

  @Column({ nullable: false })
  currentBalance: number;

  @Column({ nullable: false })
  deadline: Date;

  @Column('date', { default: new Date() })
  createdAt: Date;

  @Column('date', { default: new Date() })
  updtedAt: Date;

  @ManyToOne(() => User, (user) => user.wallets)
  user: User;
}
