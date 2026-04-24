import {
  IsString,
  IsEmail,
  IsDateString,
  MinLength,
  Matches,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  fullName!: string;

  @IsString()
  @Matches(/^\d{11}$/, {
    message: 'CPF deve conter 11 dígitos numéricos',
  })
  cpf!: string;

  @IsDateString()
  birthDate!: string;
  @IsNotEmpty({ message: 'Data de nascimento não pode ser vazio' })
  

  @IsString()
  @Matches(/^\d{10,11}$/, {
    message: 'Telefone inválido',
  })
  phone!: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  email!: string;

  @IsString()
  @MinLength(6, {
    message: 'Senha deve ter no mínimo 6 caracteres',
  })
  password!: string;
  
}