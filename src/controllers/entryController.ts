import { Request, Response } from "express";
import entryService from "@/services/entryService";

class EntryController {
  async createEntry(req: Request, res: Response): Promise<void> {
    const { codigoUsuario } = req.body;
    const entry = await entryService.createEntry(codigoUsuario);
    res.status(201).json(entry);
  }

  async getEntries(req: Request, res: Response): Promise<void> {
    const { codigoUsuario } = req.params;
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    // const codigoUsuario = req.params.codigoUsuario as string | undefined;
    const entries = await entryService.getEntries(
      page,
      pageSize,
      codigoUsuario
    );
    const totalEntries = await entryService.getEntriesCount(codigoUsuario);

    res.status(200).json({
      data: entries,
      total: totalEntries,
      page,
      pageSize,
    });
  }
}

export default new EntryController();
