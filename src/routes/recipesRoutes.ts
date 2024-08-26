import { Router } from "express";
import { get } from "http";
import { addToFavorites, getFavorites} from "../controllers/recipesController";

const router = Router();

router.post("/add-to-favorites", addToFavorites);
router.get("/get-favorites", getFavorites);

export default router;