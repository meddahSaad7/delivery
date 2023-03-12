const express=require('express')
const router=express.Router();
const bcrypt=require('bcrypt')
const Admin=require('../models/Admin.model');
const jwt=require('jsonwebtoken')
router.post("/register", async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const newUser = new Admin({
      email:req.body.email,
      password:hashedPassword
    });
    const user = await newUser.save();
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});
router.post("/login", async (req, res, next) => {
  try {
    const user = await Admin.findOne({
      email: req.body.email,
    });
    console.log(user)
    // console.log(await bcrypt.hash(req.body.password,10))
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
module.exports=router