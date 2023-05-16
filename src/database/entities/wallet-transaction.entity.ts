import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TransactionType } from 'src/database/enums/transaction-types.enum';
import { Card } from './card.entity';
import { Wallet } from './wallet.entity';

@Entity('wallet_transactions')
export class WalletTransaction {
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

  @ManyToOne(() => Wallet, (card) => card.walletTransactions)
  wallet: Wallet;
}
