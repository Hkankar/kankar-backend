const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, app.use("/auth", require("./routes/auth"));
app.use("/jobs", require("./routes/jobs"));
app.use("/applications", require("./routes/applications"));
() => {
    console.log(`Server running on port ${PORT}`);
});
