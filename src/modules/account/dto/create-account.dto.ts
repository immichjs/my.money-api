import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { AccountType } from 'src/entities/accountType'
import { User } from 'src/entities/user'

export class CreateAccountDto {
  @IsNotEmpty({ message: 'Nome da conta não pode ser vazio.' })
  @IsString({ message: 'Nome da conta precisa ser uma string.' })
  name: string

  @IsNotEmpty({ message: 'Valor da conta não pode ser vazio.' })
  @IsNumber({}, { message: 'Valor da conta precisa ser um valor númerico.' })
  amount: number

  @IsNotEmpty({ message: 'Tipo de conta não pode ser vazio.' })
  accountType: AccountType

  @IsNotEmpty({ message: 'Usuário não pode ser vazio.' })
  user: User
}
