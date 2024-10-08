import { Router } from "express";
import { get } from "http";
import { addToFavorites, getFavorites, removeFavorite, createRecipe, getAllRecipes} from "../controllers/recipesController";

const router = Router();

router.post("/add-to-favorites", addToFavorites);
router.post("/get-favorites", getFavorites);
router.post("/remove-favorite", removeFavorite);
router.post("/create-recipe", createRecipe);
router.post("/get-all-recipes", getAllRecipes);

export default router;