const User = require("../models/UserModel");
const Joi = require('joi');
const bcrypt = require('bcrypt');


const getAuthToken = require("../utils/genAuthToken");
const { response } = require("express");
const saltRounds = 10;
module.exports.register = async (req, res) => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      password: Joi.string().min(6).max(200).required(),
      email: Joi.string().min(3).max(200).email(),
    });
  
    const { error } = schema.validate(req.body);
  
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
  
    let user = await User.findOne({ email: req.body.email });
  
    if (user) {
      return res.status(400).send("User already exists...");
    }
  
    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
  
    const salt = await bcrypt.genSalt(saltRounds);
    user.password = await bcrypt.hash(user.password, salt);
  
    user = await user.save();
    const token = getAuthToken(user);

    res.send(token)
  };
  

module.exports.login = async (req, res) => {

    const schema = Joi.object({
        password: Joi.string().min(3).max(200).required(),
        email: Joi.string().min(3).max(200).email(),
      });
    
      const { error } = schema.validate(req.body);
    
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
    
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).send("Invalid credentials...");
      }
      const isValid=await bcrypt.compare(req.body.password,user.password);
      if(!isValid){
        return res.status(400).send("Invalid credentials...");
      }
      const token=getAuthToken(user);
      res.send(token);

};



