// import {
//   Injectable,
//   NotFoundException,
//   ConflictException,
// } from '@nestjs/common';
// import { PrismaService } from '@/prisma/prisma.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { Prisma } from '@prisma/client';
// import * as bcrypt from 'bcrypt';

// const USER_SELECT = {
//   id: true,
//   fullName: true,
//   cpf: true,
//   birthDate: true,
//   phone: true,
//   email: true,
//   active: true,
//   createdAt: true,
//   updatedAt: true,
// } satisfies Prisma.UserSelect;

// @Injectable()
// export class UserService {
//   constructor(private readonly prisma: PrismaService) {}