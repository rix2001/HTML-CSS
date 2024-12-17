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

// Getting a specific post
// for updating posts
router.get("/:id", authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
      const post = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
      if (post.rows.length === 0) return res.status(404).json({ error: "Post not found" });
      res.json(post.rows[0]);
    } catch (err) {
      res.status(500).json({ error: "Database error." });
    }
  });

  // Updating a post
router.put("/:id", authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    try {
      const result = await pool.query(
        "UPDATE posts SET content = $1 WHERE id = $2 RETURNING *",
        [content, id]
      );
      if (result.rows.length === 0) return res.status(404).json({ error: "Post not found" });
      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: "Failed to update post." });
    }
  });

  // Deleting a post
router.delete("/:id", authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id]);
      if (result.rows.length === 0) return res.status(404).json({ error: "Post not found" });
      res.json({ message: "Post deleted successfully." });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete post." });
    }
  });
  
// Protected route
router.get("/posts", authenticateToken, (req, res) => {
    res.json({ message: "This is a protected route!", user: req.user });
  });
  
  module.exports = router;
