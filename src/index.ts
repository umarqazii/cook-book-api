import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import recipesRoutes from "./routes/recipesRoutes";

require("dotenv").config();

let mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});

app.use("/recipes", recipesRoutes);


// Endpoint to serve uploaded images
app.use('/uploads/images', express.static(path.join(__dirname, 'uploads/images')));

// Connecting mongoDB Database
mongoose.connect(process.env.MONG_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connection established successfully");

    // Start the server only after the DB connection is established
    const PORT = process.env.PORT || 8080; 
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err: any) => {
    console.error("MongoDB connection error:", err);
  });