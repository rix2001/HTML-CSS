require("dotenv").config();
const express = require("express");
const pool = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Backend route files
app.use("/api/auth", require("./backend/routes/auth"));
app.use("/api/posts", require("./backend/routes/posts"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
