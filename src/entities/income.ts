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
import { TypeOfIncome } from './typeOfIncome'

@Entity()
export class Income {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  description: string

  @Column()
  origin: string

  @Column({ name: 'receiver_date', type: 'timestamp with time zone' })
  receiverDate: Date

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

  @OneToMany(() => TypeOfIncome, (typeOfIncome) => typeOfIncome.income)
  typeOfIncome: TypeOfIncome
}
