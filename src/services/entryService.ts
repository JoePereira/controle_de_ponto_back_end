import { HorarioEntrada } from "@prisma/client";
import { IEntryService } from "./interfaces/IEntryService";
import { IEntryRepository } from "@/repositories/interfaces/IEntryRepository";
import entryRepository from "@/repositories/entryRepository";

class EntryService implements IEntryService {
  private entryRepository: IEntryRepository;

  constructor(entryRepository: IEntryRepository) {
    this.entryRepository = entryRepository;
  }

  async createEntry(codigoUsuario: string): Promise<HorarioEntrada> {
    return this.entryRepository.createEntry(codigoUsuario);
  }

  async getEntries(
    page: number,
    pageSize: number,
    codigoUsuario: string | undefined
  ): Promise<HorarioEntrada[]> {
    return this.entryRepository.getEntries(page, pageSize, codigoUsuario);
  }

  async getEntriesCount(codigoUsuario: string): Promise<number> {
    return this.entryRepository.getEntriesCount(codigoUsuario);
  }
}

export default new EntryService(entryRepository);
