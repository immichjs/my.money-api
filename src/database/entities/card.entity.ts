import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { CreditCardTransactions } from './credit-card-transaction.entity';

@Entity('cards')
export class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  finalNumbers: string;

  @Column({ nullable: false })
  expiration: Date;

  @Column({ nullable: true })
  creditLimit: number;

  @Column({ nullable: true })
  description: string;

  @Column('date', { default: new Date() })
  createdAt: Date;

  @Column('date', { default: new Date() })
  updtedAt: Date;

  @OneToOne(() => User, (user) => user.cards)
  user: User;

  @OneToMany(
    () => CreditCardTransactions,
    (creditCardTransactions) => creditCardTransactions.card,
  )
  creditCardTransactions: CreditCardTransactions[];
}
