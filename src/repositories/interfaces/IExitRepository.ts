import { HorarioSaida } from "@prisma/client";

export interface IExitRepository {
  createExit(codigoUsuario: string): Promise<HorarioSaida>;
  getExities(
    page: number,
    pageSize: number,
    codigoUsuario: string | undefined
  ): Promise<HorarioSaida[]>;
  getExitiesCount(codigoUsuario: string): Promise<number>;
}
