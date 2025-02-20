const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    salary: String,
    description: String
});

module.exports = mongoose.model("Job", JobSchema);
