
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const User = require('../models/user');

router.get('/',(req,res,next)=>{
  User.find().exec().then(docs=>{
    console.log(docs);
    res.status(200).json(docs)
  }).catch(err=>{
    console.log(err);
    res.status(500).json({error: err})
  })

})


router.post('/',(req,res,next)=>{
  const  user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
  })
  user.save().then(result =>{
    console.log(result);
    res.status(200).json({
      message: 'handling post request to /users',
      createdProduct: result
    })
  }).catch(error=>{
    console.log(error);
    res.status(500).json({
      err: error
    })
  });


})


router.get('/:userId',(req,res,next)=>{
  const userid = req.params.userId;
  User.findById(userid).exec().then(doc=>{
    console.log(doc);
    if (doc) {
      res.status(200).json(doc);
    }else{
      res.status(404).json({
        message: "user not found"
      })
    }
  }).catch(err=>{
    console.log(err);
    res.status(500).json({error:err})
  })

})


module.exports = router;
