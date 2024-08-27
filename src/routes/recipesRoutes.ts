import { Router } from "express";
import { get } from "http";
import { addToFavorites, getFavorites, removeFavorite} from "../controllers/recipesController";

const router = Router();

router.post("/add-to-favorites", addToFavorites);
router.get("/get-favorites", getFavorites);
router.post("/remove-favorite", removeFavorite);

export default router;