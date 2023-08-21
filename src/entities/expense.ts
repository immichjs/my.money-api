import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User } from './user'
import { TypeOfExpense } from './typeOfExpense'
import { Category } from './category'
import { Payment } from './payment'

@Entity('expenses')
export class Expense {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  description: string

  @Column()
  destiny: string

  @Column({ name: 'payment_date', type: 'timestamp with time zone' })
  paymentDate: Date

  @Column({ type: 'decimal' })
  amout: number

  @Column({ type: 'boolean' })
  received: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @ManyToOne(() => User)
  user: User

  @OneToMany(() => Category, (category) => category.expense)
  category: Category

  @OneToMany(() => Payment, (payment) => payment.expense)
  payment: Payment

  @OneToMany(() => TypeOfExpense, (typeOfExpense) => typeOfExpense.expense)
  typeOfExpense: TypeOfExpense
}
