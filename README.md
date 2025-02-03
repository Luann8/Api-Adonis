# Api AdonisJS

Este é um projeto desenvolvido com [AdonisJS](https://adonisjs.com/), um framework web para Node.js, utilizando MySQL como banco de dados.

## Tecnologias Usadas

- **AdonisJS**: Framework MVC para Node.js.
- **MySQL**: Banco de dados relacional.
- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Knex.js**: Query builder para Node.js.

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

Se ainda não tiver essas ferramentas, você pode seguir os tutoriais nos links acima para instalá-las.

## Instalação

1.Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/novo-projeto.git
cd novo-projeto
npm install
```

2.Configure as credenciais do banco de dados no arquivo .env:
   
   ```bash
DB_CONNECTION=mysql
MYSQL_HOST=127.0.0.1
MYSQL_USER=root
MYSQL_PASSWORD=yourpassword
MYSQL_DB_NAME=adonis
  ```

3.Crie o banco de dados no MySQL (caso ainda não tenha sido criado):

   ```bash
CREATE DATABASE adonis;
   ```

4.Execute as migrações para criar as tabelas no banco de dados:

   ```bash
node ace migration:run
   ```

 # Desenvolvimento

 Durante o desenvolvimento, você pode rodar o servidor de desenvolvimento com o comando:

   ```bash
node ace serve --watch
   ```

O servidor será iniciado em http://localhost:3333.
