import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Phone } from './phone'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  firstname: string

  @Column()
  lastname: string

  @Column({ unique: true })
  email: string

  @Column({ length: 11, unique: true })
  cpf: string

  @Column({ select: false })
  password: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @OneToMany(() => Phone, (phone) => phone.user)
  phones: Phone[]
}
