import { Router } from "express";
import { get } from "http";
import { getRecipes} from "../controllers/recipesController";

const router = Router();

router.get("/all", getRecipes);

export default router;