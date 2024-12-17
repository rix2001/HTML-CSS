const express = require("express");
const path = require("path");
const pool = require(path.resolve(__dirname, "../../db"));
const router = express.Router();
const authenticateToken = require("../../middleware/authenticateToken");

// Getting all posts
router.get("/", authenticateToken, async (req, res) => {
  try {
    const posts = await pool.query("SELECT * FROM posts");
    res.json(posts.rows);
  } catch (err) {
    res.status(500).json({ error: "Database error." });
  }
});

// Adding new post
router.post("/", authenticateToken, async (req, res) => {
  const { title, content } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *",
      [title, content]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to add post." });
  }
});

// Protected route
router.get("/posts", authenticateToken, (req, res) => {
    res.json({ message: "This is a protected route!", user: req.user });
  });
  
  module.exports = router;
