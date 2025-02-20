const express = require("express");
const Application = require("../models/Application");

const router = express.Router();

// Apply for a Job
router.post("/apply", async (req, res) => {
    try {
        const { userId, jobId, resume } = req.body;
        const newApplication = new Application({ userId, jobId, resume });
        await newApplication.save();
        res.json({ message: "Application submitted successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Get Applications for a User
router.get("/:userId", async (req, res) => {
    try {
        const applications = await Application.find({ userId: req.params.userId });
        res.json(applications);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
