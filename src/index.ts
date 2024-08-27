import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import recipesRoutes from "./routes/recipesRoutes";
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Test endpoint
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});

app.use("/recipes", recipesRoutes);

// Endpoint to serve uploaded images
app.use('/uploads/images', express.static(path.join(__dirname, 'uploads/images')));

// MongoDB connection function
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONG_URI!, {
      // Uncomment these if needed
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("MongoDB connection established successfully");

    // Start server after DB connection is established
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
  }
};

// Call the function to connect to DB
connectDB();
