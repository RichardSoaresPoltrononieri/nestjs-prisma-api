import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service"
import { Prisma, User } from "@prisma/client"

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async getAllUsers(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async getUserById(id: string): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: {
                id
            }
        })
    }
    async createUser(data: Prisma.UserCreateInput): Promise<Pick<User, "id" | "fullName" | "email" | "cpf" | "active" | "createdAt">> {
        return this.prisma.user.create({
            data,
            select: {
                id: true,
                fullName: true,
                email: true,
                cpf: true,
                active: true,
                createdAt: true,
            },
        });
    }

    async updateUser(id: string, data: User): Promise<User> {
        return this.prisma.user.update({
            where: {
                id
            },
            data
        })
    }

    async deleteUser(id: string): Promise<User> {
        return this.prisma.user.delete({
            where: {
                id
            }
        });
    }
}