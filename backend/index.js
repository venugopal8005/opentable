const express = require("express");
const connectDB = require("./config/database");
const authRoutes = require("./routes/authrouts");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());

app.use(express.json());

connectDB();

app.use("/", authRoutes);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
