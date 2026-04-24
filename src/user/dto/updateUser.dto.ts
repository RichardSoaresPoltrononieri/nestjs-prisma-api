import {
  IsString,
  IsEmail,
  IsBoolean,
  IsDate,
  MinLength,
  Matches,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty(
    {message: 'Nome não pode ser vazio',})
    fullName!: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{11}$/, {
    message: 'CPF deve conter 11 dígitos numéricos',
  })
  cpf!: string;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty(
    {message: 'Data de nascimento não pode ser vazio',})
  birthDate!: Date;

  @IsString()
  @Matches(/^\d{10,11}$/, {
    message: 'Telefone inválido',
  })
  phone!: string;

  @IsEmail()
  @IsNotEmpty(
    (
    {message: 'Email não pode ser vazio',})
  )
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, {
    message: 'Senha deve ter no mínimo 6 caracteres',
  })
  password!: string;

  @IsBoolean()
  active!: boolean;
}