import { HorarioEntrada } from "@prisma/client";

export interface IEntryService {
  createEntry(codigoUsuario: string): Promise<HorarioEntrada>;
  getEntries(
    page: number,
    pageSize: number,
    codigoUsuario: string
  ): Promise<HorarioEntrada[]>;
  getEntriesCount(codigoUsuario: string | undefined): Promise<number>;
}
