var express = require('express');
var router = express.Router();
const User = require('../models/user');
const {checkPassword} = require('../security/securityutils');

const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

router.post('/', (req, res, next) => {
  User.findOne({
    username: req.body.username
  }, (err, user) => {
    if (err) return next(err);
      checkPassword(req.body.password, user.hash, (err, result)=>{
        if(err || !result) return next(err)
        // res.json({
        //   token: jwt.sign({
        //     name: user
        //   }, jwtSecret)
        res.json(user)
        // })
      })
  })
})

module.exports = router;