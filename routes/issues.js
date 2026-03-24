//defining issue route

const express = require("express");
const router = express.Router();
const Issue = require("../models/Issue");
const mongoose = require("mongoose");

//Post/issues

router.post("/", async (req, res) => {
    try {
        const issue = new Issue(req.body);
        const savedIssue = await issue.save();

        res.status(201).json(savedIssue);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    };

});

router.get("/", async (req, res) => {
    try {
        const issues = await Issue.find();

        res.json(issues);
    }
    catch (error) {
        res.json({ message: error.json });
    }


});

router.put("/:id", async (req, res) => {
    try {
        // ✅ Validate ID FIRST
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const updatedIssue = await Issue.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedIssue) {
            return res.status(404).json({ message: "Issue not found" });
        }

        res.json(updatedIssue);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.delete("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const deletedIssue = await Issue.findByIdAndDelete(req.params.id);

    if (!deletedIssue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    res.json({ message: "Issue deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;