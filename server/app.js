import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

// app.use(express.json());

// app.use(express.static(path.join(__dirname, "../"))); 

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../index.html"));
// });

const rootPath = path.join(__dirname, ".."); 

app.use(express.static(rootPath));

app.get("/", (req, res) => {
  // Use path.resolve to ensure the system finds the exact file
  const indexPath = path.resolve(rootPath, "index.html");
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("Error sending index.html:", err);
      res.status(403).send("Server cannot find or access index.html. Path: " + indexPath);
    }
  });
});

app.get("/add-user", async (req, res) => {
  try {
    const user = await mongoose.connection.collection("users").insertOne({
      name: "Harsh",
      email: "harsh@test.com",
      createdAt: new Date()
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});