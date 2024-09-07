import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    imageName: {
        type: String,
        required: true,
    },
    recipeName: {
        type: String,
        required: true,
    },
    cuisineType: {
        type: String,
        required: true,
    },
    mealType: {
        type: String,
        required: true,
    },
    dishType: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },

    instructions: {
        type: [String],
        required: true,
    },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;

