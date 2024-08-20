import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import recipesRoutes from "./routes/recipesRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/recipes", recipesRoutes);


// Endpoint to serve uploaded images
app.use('/uploads/images', express.static(path.join(__dirname, 'uploads/images')));

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
