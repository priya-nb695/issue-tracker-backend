const express = require("express");
const router = express.Router();
const Issue = require("../models/Issue");

//Post/issues

router.post("/",async (req,res) => {
    try {
        const issue = new Issue(req.body);
        const savedIssue = await issue.save();

        res.status(201).json(savedIssue);
    }
    catch (error){
        res.status(500).json({message:error.message});
    };
       
});

module.exports = router ;