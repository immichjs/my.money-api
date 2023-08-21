import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/entities/user'
import { ObjectIdColumn, Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'

import { hash } from 'bcryptjs'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async findAllUsers(): Promise<User[]> {
    const users = await this.usersRepository.find()

    return users
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
    const hasUserByCpf = await this.usersRepository.findOne({
      where: { cpf },
    })

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

  public async updateUser(
    id: string,
    { firstname, lastname, email }: UpdateUserDto,
  ): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } })

    if (!user) {
      throw new NotFoundException('Usuário não encontrado.')
    }

    if (firstname) user.firstname = firstname
    if (lastname) user.lastname = lastname
    if (email) user.email = email

    await this.usersRepository.save(user)

    return user
  }

  public async deleteUser(id: string): Promise<void> {
    const user = await this.usersRepository.findOne({ where: { id } })

    if (!user) {
      throw new NotFoundException('Usuário não encontrado.')
    }

    await this.usersRepository.delete(id)
  }
}
