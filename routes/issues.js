//defining issue route

const express = require("express");
const router = express.Router();
const Issue = require("../models/Issue");

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

router.get("/",async (req,res) => {
    try{
        const issues = await Issue.find();
    
         res.json(issues);
    }
    catch(error){
        res.json({message:error.json});
    }
    
    
});

module.exports = router;