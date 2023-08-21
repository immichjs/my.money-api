import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Account } from 'src/entities/account'
import { Repository } from 'typeorm'
import { CreateAccountTypeDto } from './dto/create-account-type.dto'
import { AccountType } from 'src/entities/accountType'
import { CreateAccountDto } from './dto/create-account.dto'
import { UpdateAccountTypeDto } from './dto/update-account-type.dto'
import { UpdateAccountDto } from './dto/update-account.dto'

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
    @InjectRepository(AccountType)
    private accountTypeRepository: Repository<AccountType>,
  ) {}

  public async findAllAccounts(): Promise<Account[]> {
    const accounts = await this.accountsRepository.find()

    return accounts
  }

  public async createAccount({
    name,
    amount,
    accountType,
    user,
  }: CreateAccountDto): Promise<Account> {
    const account = this.accountsRepository.create({
      name,
      amount,
      accountType,
      user,
    })

    await this.accountsRepository.save(account)

    return account
  }

  public async updateAccount(
    id: string,
    { name, amount, accountType }: UpdateAccountDto,
  ): Promise<Account> {
    const account = await this.accountsRepository.findOne({ where: { id } })

    if (!account) {
      throw new NotFoundException('Conta não encontrada.')
    }

    if (name) account.name = name
    if (amount) account.amount = amount
    if (accountType) account.accountType = accountType

    await this.accountsRepository.save(account)

    return account
  }

  public async deleteAccount(id: string): Promise<void> {
    const account = this.accountsRepository.findOne({ where: { id } })

    if (!account) {
      throw new NotFoundException('Conta não encontrada.')
    }

    await this.accountsRepository.delete(id)
  }

  public async findAllAccountType(): Promise<AccountType[]> {
    const accountTypes = await this.accountTypeRepository.find()
    return accountTypes
  }

  public async createAccountTypes({
    name,
  }: CreateAccountTypeDto): Promise<AccountType> {
    const accountType = this.accountTypeRepository.create({
      name,
    })

    await this.accountTypeRepository.save(accountType)

    return accountType
  }

  public async updateAccountType(
    id: number,
    { name }: UpdateAccountTypeDto,
  ): Promise<AccountType> {
    const accountType = await this.accountTypeRepository.findOne({
      where: { id },
    })

    if (!accountType) {
      throw new NotFoundException('Tipo de conta não encontrado.')
    }

    if (name) accountType.name = name

    await this.accountTypeRepository.save(accountType)

    return accountType
  }

  public async deleteAccountType(id: number): Promise<void> {
    const accountType = await this.accountTypeRepository.findOne({
      where: { id },
    })

    if (!accountType) {
      throw new NotFoundException('Tipo de conta não encontrado.')
    }

    await this.accountTypeRepository.delete(id)
  }
}
