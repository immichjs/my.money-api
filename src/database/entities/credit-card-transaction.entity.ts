import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TransactionType } from 'src/database/enums/transaction-types.enum';
import { Card } from './card.entity';

@Entity('credit_card_transactions')
export class CreditCardTransactions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: false })
  value: number;

  @Column({ nullable: false })
  type: TransactionType;

  @Column('date', { default: new Date() })
  createdAt: Date;

  @Column('date', { default: new Date() })
  updtedAt: Date;

  @ManyToOne(() => Card, (card) => card.creditCardTransactions)
  card: Card;
}
