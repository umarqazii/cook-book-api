import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
    uri: {
        type: String,
        required: true,
    },
    recipeid: {
        type: String,
        required: true,
    },
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

export default Favorite;

