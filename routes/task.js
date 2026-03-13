const express = require("express");
const verifyToken = require("../middleware/authmiddleware.js");
const db = require("../db");

const router = express.Router();

router.post("/create",verifyToken,(req,res)=>{

 const {title,description,user_id} = req.body;

 const sql = "INSERT INTO tasks (title,description,user_id) VALUES (?,?,?)";

 db.query(sql,[title,description,user_id],(err,result)=>{

  if(err){
   return res.send("Error creating task");
  }

  res.send("Task created successfully");

 });

});

router.get("/", verifyToken,  (req,res)=>{

 const sql = "SELECT * FROM tasks";

 db.query(sql,(err,result)=>{

  if(err){
   return res.send("Error fetching tasks");
  }

  res.json(result);

 });

});

router.put("/update/:id",verifyToken,(req,res)=>{

 const {title,description} = req.body;

 const sql = "UPDATE tasks SET title=?,description=? WHERE id=?";

 db.query(sql,[title,description,req.params.id],(err,result)=>{

  if(err){
   return res.send("Error updating task");
  }

  res.send("Task updated successfully");

 });

});

router.delete("/delete/:id",verifyToken, (req,res)=>{

 const sql = "DELETE FROM tasks WHERE id=?";

 db.query(sql,[req.params.id],(err,result)=>{

  if(err){
   return res.send("Error deleting task");
  }

  res.send("Task deleted successfully");

 });

});

module.exports = router;