const express=require('express')
const router=express.Router();
const bcrypt=require('bcrypt')
const User=require('../models/User.model');
const jwt=require('jsonwebtoken')
const validation = require("../middleware.js/validation");
const userSchema = require("../validations/userValidations");
router.post("/register", async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      wilaya:req.body.wilaya,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});
router.post("/login", validation(userSchema), async (req, res, next) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
      console.log("🚀 ~ file: Auth.router.js:32 ~ router.post ~ req.body:", user)
    var validPassword = false;
    if (user) {
      validPassword = await bcrypt.compare(req.body.password, user.password);
      if (validPassword) {
        const maxAge = 60 * 60 * 24;
        var token = jwt.sign({ user: user._id }, process.env.token, {
          expiresIn: maxAge,
        });
        res.cookie("user", token, { httpOnly: true, maxAge: maxAge * 1000 });
        res
          .status(200)
          .json({
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            wilaya:user.wilaya,
            token: token,
          });
      } else {
        res.status(200).send("password not correct");
      }
    } else {
      res.status(202).send("user not found");
    }
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});
router.post('/logout',async(req,res,next)=>{
    console.log(res.cookie)
})
router.get("/getUser",async(req,res,next)=>{
    const token=req.cookies.user;
    if(token){
        const Token = jwt.verify(
          req.cookies.user,
          process.env.token,
          (err, data) => {
            if (err) {
              console.log(err, "token err");
            } else {
              return data
            }
          }
        );
        const user=await User.findById(Token.user)
        res.status(200).send(user)
    }else{
        res.status(500).send({redirect:true,msg:'you are not connected...'})
    }
});
module.exports=router;

