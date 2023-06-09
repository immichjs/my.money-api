import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './database/entities/user.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
