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
import { Asset } from './asset'

@Entity('contruibutions')
export class Contribution {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  description: string

  @Column()
  broker: string

  @Column({ name: 'investment_date', type: 'timestamp with time zone' })
  investmentDate: Date

  @Column({ type: 'decimal' })
  amout: number

  @Column({ type: 'boolean' })
  done: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @ManyToOne(() => User)
  user: User

  @OneToMany(() => Asset, (asset) => asset.contributions)
  asset: Asset
}
