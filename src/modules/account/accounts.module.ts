import { Module } from '@nestjs/common'
import { AccountsController } from './accounts.controller'
import { AccountsService } from './accounts.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Account } from 'src/entities/account'
import { AccountType } from 'src/entities/accountType'

@Module({
  imports: [TypeOrmModule.forFeature([Account, AccountType])],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
