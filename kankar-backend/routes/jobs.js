const express = require("express");
const Job = require("../models/Job");

const router = express.Router();

// Get All Job Listings
router.get("/", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Create a New Job (Admin Only)
router.post("/add", async (req, res) => {
    try {
        const { title, company, location, salary, description } = req.body;
        const newJob = new Job({ title, company, location, salary, description });
        await newJob.save();
        res.json({ message: "Job added successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
