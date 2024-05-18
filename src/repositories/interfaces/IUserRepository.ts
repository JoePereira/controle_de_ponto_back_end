import { Usuario } from "@prisma/client";

export interface IUserRepository {
  createUser(nome: string): Promise<Usuario>;
  getUserById(codigoUsuario: string): Promise<Usuario | null>;
}
