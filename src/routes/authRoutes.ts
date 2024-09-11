import { Router } from "express";
import { get } from "http";
import { login, signup } from "../controllers/authController";
const router = Router();

router.post("/login", login);
router.post("/signup", signup);

export default router