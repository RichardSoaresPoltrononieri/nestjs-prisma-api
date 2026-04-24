import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service"
import { Prisma, User } from "@prisma/client"
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async getAllUsers(): Promise<
        Pick<User, 'id' | 'fullName' | 'email' | 'cpf' | 'active' | 'createdAt' | 'updatedAt'>[]
    > {
        return this.prisma.user.findMany({
            select: {
                id: true,
                fullName: true,
                email: true,
                cpf: true,
                active: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }

    async getUserById(
        id: string,
    ): Promise<
        Pick<User, 'id' | 'fullName' | 'email' | 'cpf' | 'active' | 'createdAt' | 'updatedAt'>
    > {
        const user = await this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                fullName: true,
                email: true,
                cpf: true,
                active: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        if (!user) {
            throw new NotFoundException('Usuário não encontrado');
        }

        return user;
    }

    async createUser(data: CreateUserDto){
        return this.prisma.user.create({
            data: {
                ...data,
                active: true,
                birthDate: new Date(`${data.birthDate}T00:00:00.000Z`),
            },
            select: {
                id: true,
                fullName: true,
                birthDate: true, 
                cpf: true,
                email: true,
                createdAt: true,
            },
        });
    }
    async updateUser(
        id: string,
        data: Prisma.UserUpdateInput,
    ): Promise<
        Pick<User, 'id' | 'fullName' | 'email' | 'cpf' | 'active' | 'updatedAt'>
    > {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });

        if (!user) {
            throw new NotFoundException('Usuário não encontrado');
        }

        return this.prisma.user.update({
            where: { id },
            data,
            select: {
                id: true,
                fullName: true,
                email: true,
                cpf: true,
                active: true,
                updatedAt: true,
            },
        });
    }

    async deleteUser(
        id: string,
    ): Promise<Pick<User, 'id' | 'fullName' | 'email'>> {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });

        if (!user) {
            throw new NotFoundException('Usuário não encontrado');
        }

        return this.prisma.user.delete({
            where: { id },
            select: {
                id: true,
                fullName: true,
                email: true,
            },
        });
    }
}