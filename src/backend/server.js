const express = require("express");
const pool = require("./db");
const app = express();

require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const pool = require("./db"); // Andmebaasi ühendus
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use(express.json());
app.use(require("cors")());
require("dotenv").config();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));