import prisma from "@/utils/prismaClient";
import { HorarioEntrada } from "@prisma/client";
import { IEntryRepository } from "./interfaces/IEntryRepository";

class EntryRepository implements IEntryRepository {
  async createEntry(codigoUsuario: string): Promise<HorarioEntrada> {
    const dia = new Date();
    const horarioEntrada = new Date();

    return prisma.horarioEntrada.create({
      data: { codigoUsuario, dia, horarioEntrada },
    });
  }

  async getEntries(
    page: number,
    pageSize: number,
    codigoUsuario?: string
  ): Promise<HorarioEntrada[]> {
    return prisma.horarioEntrada.findMany({
      where: codigoUsuario ? { codigoUsuario } : {},
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { dia: "desc" },
    });
  }

  async getEntriesCount(codigoUsuario?: string): Promise<number> {
    return prisma.horarioEntrada.count({
      where: codigoUsuario ? { codigoUsuario } : {},
    });
  }
}

export default new EntryRepository();
