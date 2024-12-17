const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const pool = require(path.resolve(__dirname, "../../db")); // PostgreSQL connection
const router = express.Router();

// signups
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Checking, if user already exists
    const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: "User already exists." });
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id",
      [email, hashedPassword]
    );

    // Creating JWT token after creating a user
    const token = jwt.sign({ userId: result.rows[0].id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ message: "User created successfully!", token });
  } catch (err) {
    console.error("Database Error:", err.message); // Logi täpne viga
    if (err.code === "23505") {
      return res.status(400).json({ error: "User already exists." }); // PostgreSQL duplicate error
    }
    res.status(500).json({ error: "Internal server error." });
  }
});

// logging
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (user.rows.length === 0) {
      return res.status(400).json({ error: "User does not exist." });
    }

    const isValid = await bcrypt.compare(password, user.rows[0].password_hash);
    if (!isValid) return res.status(400).json({ error: "Invalid credentials." });

    const token = jwt.sign({ userId: user.rows[0].id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
