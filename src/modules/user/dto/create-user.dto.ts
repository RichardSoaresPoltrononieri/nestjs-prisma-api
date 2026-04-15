// import {
//   IsString,
//   IsEmail,
//   IsDateString,
//   MinLength,
//   MaxLength,
//   Matches,
// } from 'class-validator';

// export class CreateUserDto {
//   @IsString({ message: 'Nome deve ser um texto' })
//   @MinLength(3, { message: 'Nome deve ter pelo menos 3 caracteres' })
//   @MaxLength(100, { message: 'Nome deve ter no máximo 100 caracteres' })
//   fullName: string;

//   @IsString({ message: 'CPF deve ser um número' })
//   @Matches(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, {
//     message: 'CPF inválido. Use o formato 000.000.000-00 ou somente números',
//   })
//   cpf: string;

//   @IsDateString({}, { message: 'Data de nascimento inválida. Use o formato DD-MM-YYYY' })
//   birthDate: string;

//   @IsString({ message: 'Telefone deve ser um número' })
//   @Matches(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, {
//     message: 'Telefone inválido. Use o formato (00) 00000-0000',
//   })
//   phone: string;

//   @IsEmail({}, { message: 'Email inválido' })
//   @MaxLength(150, { message: 'Email deve ter no máximo 150 caracteres' })
//   email: string;

//   @IsString({ message: 'Senha deve ser um texto' })
//   @MinLength(8, { message: 'Senha deve ter pelo menos 8 caracteres' })
//   @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
//     message: 'Senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número',
//   })
//   password: string;
// }