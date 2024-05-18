import prisma from "@/utils/prismaClient";
import { Usuario } from "@prisma/client";
import { IUserRepository } from "./interfaces/IUserRepository";
import generateId from "@/utils/geberateId";

class UserRepository implements IUserRepository {
  async createUser(nome: string): Promise<Usuario> {
    const codigoUsuario = generateId();
    return prisma.usuario.create({
      data: { id: codigoUsuario, nome },
    });
  }

  async getUserById(codigoUsuario: string): Promise<Usuario | null> {
    return prisma.usuario.findUnique({
      where: { id: codigoUsuario },
    });
  }
}

export default new UserRepository();
