const jwt = require("jsonwebtoken");

function verifyToken(req,res,next){

 const token = req.headers["authorization"];

 if(!token){
  return res.send("Access denied");
 }

 try{

  const decoded = jwt.verify(token,"secretkey");

  req.user = decoded;

  next();

 }catch(err){
  res.send("Invalid token");
 }

}

module.exports = verifyToken;