const express = require("express");
const db = require("./db.js");

const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/task");

const app = express();

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req,res)=>{
 res.send("Server running");
});

app.listen(5000,()=>{
 console.log("Server started on port 5000");
});