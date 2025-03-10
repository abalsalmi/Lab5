import express from "express";
import serverless from "serverless-http";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const api = express();
const router = express.Router();

// Read your Unsplash API key from .env
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

// GET /api/search?query=<searchTerm>
router.get("/search", async (req, res) => {
  const query = req.query.query;
  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        query
      )}&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    const data = await response.json();

    // If Unsplash returns errors, handle them
    if (data.errors) {
      return res.status(500).json({
        error: "Error from Unsplash",
        details: data.errors,
      });
    }

    // Return the entire response (including 'results')
    res.json(data);
  } catch (error) {
    console.error("Error fetching from Unsplash:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Attach the router to /api
api.use("/api/", router);

// Export as a Netlify serverless function
export const handler = serverless(api);
