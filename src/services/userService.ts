import { IUserRepository } from "@/repositories/interfaces/IUserRepository";
import { IUserService } from "./interfaces/IUserService";
import { Usuario } from "@prisma/client";
import userRepository from "@/repositories/userRepository";

class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(nome: string): Promise<Usuario> {
    return this.userRepository.createUser(nome);
  }

  async getUserById(codigoUsuario: string): Promise<Usuario | null> {
    return this.userRepository.getUserById(codigoUsuario);
  }
}

export default new UserService(userRepository);
