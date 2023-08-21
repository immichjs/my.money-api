import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/entities/user'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'

import { hash } from 'bcryptjs'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async findAllUsers(): Promise<User[]> {
    return this.usersRepository.find()
  }

  public async createUser({
    firstname,
    lastname,
    cpf,
    email,
    password,
  }: CreateUserDto): Promise<User> {
    const hasUserByEmail = await this.usersRepository.findOne({
      where: { email },
    })
    const hasUserByCpf = await this.usersRepository.findOne({ where: { cpf } })

    console.log(hasUserByCpf, hasUserByEmail)

    if (hasUserByEmail) {
      throw new BadRequestException(
        `Já existe um usuário com o e-mail: ${email}`,
      )
    }

    if (hasUserByCpf) {
      throw new BadRequestException(`Já existe um usuário com o CPF: ${cpf}`)
    }

    const hashedPassword = await hash(password, 10)

    const user = this.usersRepository.create({
      firstname,
      lastname,
      cpf,
      email,
      password: hashedPassword,
    })

    await this.usersRepository.save(user)

    return this.usersRepository.findOne({ where: { id: user.id } })
  }
}
