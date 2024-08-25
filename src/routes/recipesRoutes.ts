import { Router } from "express";
import { get } from "http";
import { addToFavorites} from "../controllers/recipesController";

const router = Router();

router.post("/add-to-favorites", addToFavorites);

export default router;