import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import cors from "cors";
import path from "path";

import connectDB from "./db/db.js";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";

const app = express();
connectDB();
dotenv.config();


// Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

// Cors
app.use(cors({
    origin: ['https://cosial.onrender.com', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`)
});