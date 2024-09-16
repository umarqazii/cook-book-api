import { Router } from "express";
import { get } from "http";
import { login, signup, protectedRoute } from "../controllers/authController";
import { authenticateToken } from "../middleware/auth";
const router = Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/protected", authenticateToken, protectedRoute);
router.get("/addrecipe", authenticateToken, (req, res) => {
    res.status(200).send("Welcome to the Dashboard!");
  });
export default router