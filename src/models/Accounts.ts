import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Username: {
        type: String,
        required: true,
        unique: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
    },
});

const Account = mongoose.model("Account", accountSchema);

export default Account;