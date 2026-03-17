const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const issueRoutes = require ("./routes/issues");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/",(req,res) => {
  res.send("Issue Tracker API running");
});

app.use("/issues",issueRoutes);

const PORT = process.env.PORT || 5000 ;
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
})