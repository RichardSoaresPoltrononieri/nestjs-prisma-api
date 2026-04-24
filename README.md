# 🚀 NestJS Prisma API

API REST desenvolvida com **NestJS**, **Prisma ORM** e **PostgreSQL (Neon)**, focada em gerenciamento de usuários com validação, regras de negócio e arquitetura modular.

---

## 🧠 Tecnologias utilizadas

- NestJS
- Prisma ORM
- PostgreSQL (Neon)
- TypeScript
- Class Validator
- Class Transformer

---

## 📌 Funcionalidades

- ✅ CRUD completo de usuários
- ✅ Validação de dados com DTOs
- ✅ Tratamento global de erros (Prisma Exception Filter)
- ✅ Padronização de respostas via Interceptor
- ✅ Regras de negócio no backend (active fixo como true)
- ✅ Controle de duplicidade (CPF e email únicos)
- ✅ Integração com banco Neon PostgreSQL

---

## 🏗️ Arquitetura

O projeto segue uma arquitetura modular do NestJS:


src/
├── user/
│ ├── dto/
│ ├── user.controller.ts
│ ├── user.service.ts
├── prisma/
│ ├── prisma.service.ts
├── common/
│ ├── filters/
│ ├── interceptors/


---

## ⚙️ Instalação

### 1. Clonar o projeto

```bash
git clone https://github.com/RichardSoaresPoltrononieri/nestjs-prisma-api.git
cd nestjs-prisma-api

2. Instalar dependências
npm install

3. Configurar variáveis de ambiente

Crie um .env:

DATABASE_URL="sua_url_do_neon"
PORT=3000

4. Rodar migrations
npx prisma migrate dev

5. Iniciar o servidor
npm run start:dev

## 📡 Endpoints
👤 Users
Método	Rota	Descrição
GET	/users	Lista todos usuários
GET	/users/:id	Busca usuário por ID
POST	/users	Cria usuário
PATCH	/users/:id	Atualiza usuário
DELETE	/users/:id	Remove usuário


📥 Exemplo de criação de usuário
{
  "fullName": "Richard Soares",
  "cpf": "12345678900",
  "birthDate": "1993-02-01",
  "phone": "11999999999",
  "email": "richard@email.com",
  "password": "123456"
}

⚠️ Regras do sistema
active é sempre true no cadastro (definido no backend)
email deve ser único
cpf deve ser único
birthDate deve ser enviado no formato YYYY-MM-DD
🚨 Tratamento de erros

A API possui filtro global para Prisma:

Email duplicado → 409 Conflict
CPF duplicado → 409 Conflict
Usuário não encontrado → 404 Not Found


📦 Melhorias futuras
 Autenticação JWT
 Hash de senha com bcrypt
 Paginação de usuários
 Soft delete
 Swagger documentation
 Roles e permissões

👨‍💻 Autor
Richard Soares Poltronieri

GitHub: @RichardSoaresPoltrononieri
⭐ Se este projeto te ajudou

Deixe uma estrela no repositório 👍