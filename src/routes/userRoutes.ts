import userController from "@/controllers/userController";
import { Router } from "express";

const router = Router();

router.post("/createUser", userController.createUser);
router.get("/getUserById/:codigoUsuario", userController.getUserById);

export default router;
