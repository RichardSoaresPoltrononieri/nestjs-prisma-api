import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpStatus,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        if (exception.code === 'P2002') {
            const message = exception.message;

            if (message.includes('(`email`)')) {
                return response.status(HttpStatus.CONFLICT).json({
                    success: false,
                    statusCode: 409,
                    message: 'Email já cadastrado',
                });
            }

            if (message.includes('(`cpf`)')) {
                return response.status(HttpStatus.CONFLICT).json({
                    success: false,
                    statusCode: 409,
                    message: 'CPF já cadastrado',
                });
            }

            return response.status(HttpStatus.CONFLICT).json({
                success: false,
                statusCode: 409,
                message: 'Dados duplicados',
            });
        }

        return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            statusCode: 500,
            message: 'Erro interno do servidor',
        });
    }
}