# Controle de Ponto - Backend
Este projeto é um sistema de controle de ponto desenvolvido em Node.js e TypeScript, utilizando o banco de dados PostgreSQL com Prisma como ORM. A aplicação segue os princípios SOLID para uma arquitetura limpa e extensível, e utiliza Jest para testes automatizados.

##Tecnologias Utilizadas
- Node.js: Plataforma para execução do código JavaScript no servidor.
- TypeScript: Superset de JavaScript que adiciona tipagem estática.
- Express: Framework web para Node.js.
- Prisma: ORM (Object-Relational Mapping) para interagir com o banco de dados PostgreSQL.
- PostgreSQL: Sistema de gerenciamento de banco de dados relacional.
- Jest: Framework de testes em JavaScript.

##Descrição dos Diretórios e Arquivos

- **src/controllers:** Contém os controladores que lidam com as requisições HTTP.
  - **userController.ts:** Controlador para operações de usuários.
  - **entryController.ts:** Controlador para operações de horários de entradas.
  - **exitController.ts:** Controlador para operações de horarios de saida.
