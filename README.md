# 📝 Task List API

Uma API REST completa para gerenciamento de tarefas (to-do list), construída com **NestJS**, **TypeORM**, **PostgreSQL**, **Docker** e validação com `class-validator`.

---

## 🚀 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) - Framework Node.js para construção de APIs robustas
- [TypeORM](https://typeorm.io/) - ORM para banco de dados
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
- [Docker](https://www.docker.com/) - Contêineres para facilitar o ambiente
- [pgAdmin](https://www.pgadmin.org/) - Interface gráfica para PostgreSQL
- [class-validator](https://github.com/typestack/class-validator) - Validação de dados

---

## 📌 Requisitos

- Node.js v18+
- pnpm
- Docker e Docker Compose

---

## 📁 Estrutura do Projeto

```bash
src/
├── app.module.ts
├── main.ts
└── tasks/
    ├── dto/
    │   ├── create-task.dto.ts
    │   └── update-task.dto.ts
    ├── task.entity.ts
    ├── tasks.controller.ts
    ├── tasks.module.ts
    └── tasks.service.ts
```

---

## 🐳 Como Rodar com Docker

### 1. Clonar o repositório

```bash
git clone https://github.com/dornellesfr/todo-list-backend.git
cd todo-list-backend
```

### 2. Subir os containers

```bash
docker-compose up --build
```

### 3. Acessos

- API: http://localhost:3000
- pgAdmin: http://localhost:5050
- Banco PostgreSQL: `localhost:5432`

## 📚 Endpoints da API

| Método | Rota         | Descrição                     |
| ------ | ------------ | ----------------------------- |
| GET    | `/todos`     | Lista todas as tarefas        |
| GET    | `/todos/:id` | Retorna uma tarefa pelo ID    |
| POST   | `/todos`     | Cria uma nova tarefa          |
| PUT    | `/todos/:id` | Atualiza uma tarefa existente |
| DELETE | `/todos/:id` | Exclui uma tarefa             |

---

## 📥 Exemplo de Requisições

### ➕ Criar Tarefa

**POST** `/todos`

```json
{
  "title": "Estudar NestJS"
  "description": "Estudar das 17h às 18h NESTJS"
}
```

### ✏️ Atualizar Tarefa

**PUT** `/todos/1`

```json
{
  "title": "Estudar Docker",
  "description": "Estudar das 14h às 15h30 sobre Dockerfile",
  "isDone": true
}
```

---

## ✅ Validação de Dados

Os DTOs usam `class-validator` para validação automática.

## 🧑‍💻 Autor

Feito com 💙 por [Fernando Dornelles Rocha](https://github.com/dornellesfr)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
