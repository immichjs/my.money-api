import { IsNotEmpty, IsString } from 'class-validator'

export class CreateAccountTypeDto {
  @IsNotEmpty({ message: 'Tipo de conta não pode ser vazio.' })
  @IsString({ message: 'Tipo de conta precisa ser uma string' })
  name: string
}
