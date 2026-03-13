const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req,res)=>{

 const {name,email,password} = req.body;

 const hashedPassword = await bcrypt.hash(password,10);

 const sql = "INSERT INTO users (name,email,password) VALUES (?,?,?)";

 db.query(sql,[name,email,hashedPassword],(err,result)=>{
  if(err){
   console.log(err);
   return res.send("Error registering user");
  }

  res.send("User registered successfully");
 });

});

router.post("/login", (req,res)=>{

 const {email,password} = req.body;

 const sql = "SELECT * FROM users WHERE email=?";

 db.query(sql,[email], async(err,result)=>{

  if(err){
   return res.send("Database error");
  }

  if(result.length === 0){
   return res.send("User not found");
  }

  const user = result[0];

  const validPassword = await bcrypt.compare(password,user.password);

  if(!validPassword){
   return res.send("Invalid password");
  }

  const token = jwt.sign({id:user.id},"secretkey",{expiresIn:"1h"});

  res.json({
   message:"Login successful",
   token:token
  });

 });

});

module.exports = router;