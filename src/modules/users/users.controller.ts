import { Body, Controller, Get, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from 'src/entities/user'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async findAllUsers(): Promise<User[]> {
    return this.usersService.findAllUsers()
  }

  @Post()
  public async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto)
  }
}
