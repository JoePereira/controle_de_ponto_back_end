import { Router } from "express";
import exitController from "@/controllers/exitController";

const router = Router();

router.post("/createExit", exitController.createExit);
router.get("/getExities/:codigoUsuario", exitController.getExities);

export default router;
