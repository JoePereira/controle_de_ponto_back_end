import { Request, Response } from "express";
import userService from "@/services/userService";

class UserController {
  async createUser(req: Request, resp: Response): Promise<void> {
    const { nome } = req.body;

    const user = await userService.createUser(nome);

    resp.status(201).json(user);
  }

  async getUserById(req: Request, resp: Response): Promise<void> {
    const { codigoUsuario } = req.params;

    const user = await userService.getUserById(codigoUsuario);

    if (user) {
      resp.status(200).json(user);
    } else {
      resp.status(404).json({ message: "Usuario nao cadastrado no sistema" });
    }
  }
}

export default new UserController();
