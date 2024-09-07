import { Router } from "express";
import { get } from "http";
import { addToFavorites, getFavorites, removeFavorite, createRecipe} from "../controllers/recipesController";

const router = Router();

router.post("/add-to-favorites", addToFavorites);
router.get("/get-favorites", getFavorites);
router.post("/remove-favorite", removeFavorite);
router.post("/create-recipe", createRecipe);


export default router;