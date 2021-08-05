const express = require("express")
const User = require("../db/models/Users"); // new
const auth = require("../middlewares/auth");
const router = express.Router()

// Get all posts
router.post("/user/create",auth , async (req, res) => {
	try{
    const mobileNumber = req.decodedToken.phone_number;
    const {userName} = req.body;
  
    if(!userName  || !mobileNumber){
      return res.status(400).send({success:false,message:"please send username"});
    }

    const user = new User({
      ...req.body,
      mobileNumber
    })
    await user.save()
    res.send({success:true,message:"User created successfully"})
  }catch(err){
    console.log(err)
  }
})

module.exports = router