import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
    },
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
    dateOfPosting: {
        type: Date,
        required: true,
    }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;

