const mongoose = require("mongoose");

const ApplySchema = new mongoose.Schema({
    userId: String,
    jobId: String,
    resume: String,
    status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Application", ApplySchema);
