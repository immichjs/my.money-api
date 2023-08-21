import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty({ message: 'Primeiro nome não pode ser vazio.' })
  @IsString({ message: 'Primeiro nome precisa ser uma string' })
  firstname: string

  @IsNotEmpty({ message: 'Sobrenome não pode ser vazio.' })
  @IsString({ message: 'Sobrenome nome precisa ser uma string' })
  lastname: string

  @IsNotEmpty({ message: 'CPF não pode ser vazio.' })
  @IsString({ message: 'CPF precisa ser uma string' })
  @MaxLength(11, { message: 'CPF precisa ter 11 caracteres.' })
  cpf: string

  @IsNotEmpty({ message: 'E-mail não pode ser vazio.' })
  @IsEmail({}, { message: 'E-mail inválido.' })
  email: string

  @IsNotEmpty({ message: 'Senha não pode ser vazia.' })
  @IsString({ message: 'Senha precisa ser uma string' })
  password: string
}
