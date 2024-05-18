import { HorarioEntrada } from "@prisma/client";

export interface IEntryRepository {
  createEntry(codigoUsuario: string): Promise<HorarioEntrada>;
  getEntries(
    page: number,
    pageSize: number,
    codigoUsuario: string | undefined
  ): Promise<HorarioEntrada[]>;
  getEntriesCount(codigoUsuario: string): Promise<number>;
}
