import { Router } from "express";
import entryController from "@/controllers/entryController";

const router = Router();

router.post("/createEntry", entryController.createEntry);
router.get("/getEntries/:codigoUsuario", entryController.getEntries);

export default router;
