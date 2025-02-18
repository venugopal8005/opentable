// require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const authRoutes = require("./routes/authrouts");
const cors = require("cors");
const app = express();
app.use(cors());
// Middleware
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/", authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
