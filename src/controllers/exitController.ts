import { Request, Response } from "express";
import exitService from "@/services/exitService";

class ExitController {
  async createExit(req: Request, res: Response): Promise<void> {
    const { codigoUsuario } = req.body;
    const entry = await exitService.createExit(codigoUsuario);
    res.status(201).json(entry);
  }

  async getExities(req: Request, res: Response): Promise<void> {
    const { codigoUsuario } = req.params;
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    // const codigoUsuario = req.params.codigoUsuario as string | undefined;
    const entries = await exitService.getExities(page, pageSize, codigoUsuario);
    const totalEntries = await exitService.getExitiesCount(codigoUsuario);

    res.status(200).json({
      data: entries,
      total: totalEntries,
      page,
      pageSize,
    });
  }
}

export default new ExitController();
