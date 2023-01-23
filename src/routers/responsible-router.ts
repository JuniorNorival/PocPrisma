import { Router } from "express";
import { addResponsible } from "../controllers/responsible-controller.js";
import { validateName } from "../middleware/responsible-middleware.js";

const router = Router();
router.post("/responsible", validateName, addResponsible);

export default router;
