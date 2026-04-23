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

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  fullName!: string;

  @IsString()
  @Matches(/^\d{11}$/, {
    message: 'CPF deve conter 11 dígitos numéricos',
  })
  cpf!: string;

  @Type(() => Date)
  @IsDate()
  birthDate!: Date;

  @IsString()
  @Matches(/^\d{10,11}$/, {
    message: 'Telefone inválido',
  })
  phone!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6, {
    message: 'Senha deve ter no mínimo 6 caracteres',
  })
  password!: string;

  @IsBoolean()
  active!: boolean;
}