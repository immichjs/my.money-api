import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

export class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  bank: string

  @Column({ type: 'decimal' })
  limit: number

  @Column()
  final: string

  @Column()
  closing: number

  @Column()
  maturity: number

  @CreateDateColumn('created_at')
  createdAt: string

  @UpdateDateColumn('updated_at')
  updatedAt: string
}
