import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

export class Benefits {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  description: string

  @Column({ type: 'decimal' })
  limit: number

  @Column()
  final: string

  @Column({ type: 'decimal' })
  amout: number

  @CreateDateColumn('created_at')
  createdAt: string

  @UpdateDateColumn('updated_at')
  updatedAt: string
}
