const express = require('express');
const router = express.Router();
const Report = require('../models/report');

// Create a new report (unassigned initially)
router.post('/reports', async (req, res) => {
  try {
    const { title, block, floor, room, location, category, priority, description, imageUrl, studentId } = req.body;
    console.log("Creating new report with data:", { title, block, floor, room, location, category, priority, description, imageUrl: imageUrl ? "Present" : "Missing", studentId });
    
    const newReport = new Report({ title, block, floor, room, location, category, priority, description, imageUrl, studentId });
    await newReport.save();
    
    console.log("Report saved successfully with ID:", newReport._id);
    console.log("Report imageUrl field:", newReport.imageUrl ? "Present" : "Missing");
    
    res.status(201).json(newReport);
  } catch (err) {
    console.error("Error creating report:", err);
    res.status(500).json({ error: err.message });
  }
});

// Get reports by studentId
router.get('/reports/:studentId', async (req, res) => {
  try {
    const { studentId } = req.params;
    const reports = await Report.find({ studentId });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;