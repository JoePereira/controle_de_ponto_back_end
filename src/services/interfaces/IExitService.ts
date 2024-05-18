import { HorarioSaida } from "@prisma/client";

export interface IExitService {
  createExit(codigoUsuario: string): Promise<HorarioSaida>;
  getExities(
    page: number,
    pageSize: number,
    codigoUsuario: string
  ): Promise<HorarioSaida[]>;
  getExitiesCount(codigoUsuario: string | undefined): Promise<number>;
}
