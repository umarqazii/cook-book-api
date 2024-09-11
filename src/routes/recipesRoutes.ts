import { Router } from "express";
import { get } from "http";
import { addToFavorites, getFavorites, removeFavorite, createRecipe, getAllRecipes} from "../controllers/recipesController";

const router = Router();

router.post("/add-to-favorites", addToFavorites);
router.get("/get-favorites", getFavorites);
router.post("/remove-favorite", removeFavorite);
router.post("/create-recipe", createRecipe);
router.get("/get-all-recipes", getAllRecipes);

export default router;