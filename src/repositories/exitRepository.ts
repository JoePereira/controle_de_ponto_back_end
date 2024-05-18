import prisma from "@/utils/prismaClient";
import { HorarioSaida } from "@prisma/client";
import { IExitRepository } from "./interfaces/IExitRepository";

class ExitRepository implements IExitRepository {
  async createExit(codigoUsuario: string): Promise<HorarioSaida> {
    const dia = new Date();
    const horarioSaida = new Date();

    return prisma.horarioSaida.create({
      data: { codigoUsuario, dia, horarioSaida },
    });
  }

  async getExities(
    page: number,
    pageSize: number,
    codigoUsuario?: string
  ): Promise<HorarioSaida[]> {
    return prisma.horarioSaida.findMany({
      where: codigoUsuario ? { codigoUsuario } : {},
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { dia: "desc" },
    });
  }

  async getExitiesCount(codigoUsuario?: string): Promise<number> {
    return prisma.horarioSaida.count({
      where: codigoUsuario ? { codigoUsuario } : {},
    });
  }
}

export default new ExitRepository();
