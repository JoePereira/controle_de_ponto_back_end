import { Usuario } from "@prisma/client";

export interface IUserService {
  createUser(nome: string): Promise<Usuario>;
  getUserById(codigoUsuario: string): Promise<Usuario | null>;
}
