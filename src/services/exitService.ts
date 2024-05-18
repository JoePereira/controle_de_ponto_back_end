import { HorarioSaida } from "@prisma/client";
import { IExitService } from "./interfaces/IExitService";
import { IExitRepository } from "@/repositories/interfaces/IExitRepository";
import exitRepository from "@/repositories/exitRepository";

class ExitService implements IExitService {
  private exitRepository: IExitRepository;

  constructor(entryRepository: IExitRepository) {
    this.exitRepository = entryRepository;
  }

  async createExit(codigoUsuario: string): Promise<HorarioSaida> {
    return this.exitRepository.createExit(codigoUsuario);
  }

  async getExities(
    page: number,
    pageSize: number,
    codigoUsuario: string | undefined
  ): Promise<HorarioSaida[]> {
    return this.exitRepository.getExities(page, pageSize, codigoUsuario);
  }

  async getExitiesCount(codigoUsuario: string): Promise<number> {
    return this.exitRepository.getExitiesCount(codigoUsuario);
  }
}

export default new ExitService(exitRepository);
