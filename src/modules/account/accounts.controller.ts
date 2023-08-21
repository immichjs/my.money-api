import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common'
import { Account } from 'src/entities/account'
import { AccountsService } from './accounts.service'
import { AccountType } from 'src/entities/accountType'
import { CreateAccountTypeDto } from './dto/create-account-type.dto'
import { CreateAccountDto } from './dto/create-account.dto'
import { UpdateAccountTypeDto } from './dto/update-account-type.dto'
import { UpdateAccountDto } from './dto/update-account.dto'

@Controller('accounts')
export class AccountsController {
  constructor(public readonly accountsService: AccountsService) {}

  @Get()
  public async findAllAccounts(): Promise<Account[]> {
    return this.accountsService.findAllAccounts()
  }

  @Post()
  public async createAccount(
    @Body() createAccountDto: CreateAccountDto,
  ): Promise<Account> {
    return this.accountsService.createAccount(createAccountDto)
  }

  @Patch(':id')
  public async updateAccount(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ): Promise<Account> {
    return this.accountsService.updateAccount(id, updateAccountDto)
  }

  @Delete(':id')
  public async deleteAccount(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.accountsService.deleteAccount(id)
  }

  @Get('/type')
  public async findAllAccountType(): Promise<AccountType[]> {
    return this.accountsService.findAllAccountType()
  }

  @Post('/type')
  public async createAccountTypes(
    @Body() accountTypeDto: CreateAccountTypeDto,
  ): Promise<AccountType> {
    return this.accountsService.createAccountTypes(accountTypeDto)
  }

  @Patch('/type/:id')
  public async updateAccountType(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateAccountTypeDto: UpdateAccountTypeDto,
  ): Promise<AccountType> {
    return this.accountsService.updateAccountType(id, updateAccountTypeDto)
  }

  @Delete('/type/:id')
  public async deleteAccountType(@Param('id', new ParseIntPipe()) id: number) {
    return this.accountsService.deleteAccountType(id)
  }
}
