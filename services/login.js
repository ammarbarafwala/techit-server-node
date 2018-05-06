var express = require('express');
var router = express.Router();
const User = require('../models/user');
const {checkPassword} = require('../security/securityutils');

const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

router.post('/', (req, res, next) => {
  if( !req.body.username ) return next(createError(401, 'Username invalid'))
  User.findOne({
    username: req.body.username
  }, (err, user) => {
    if (err) return next(err);
      checkPassword(req.body.password, user.hash, (err, result)=>{
        if(err || !result) return next(createError(401, 'Password invalid'))
        res.json({
          token: jwt.sign({profile:user}, jwtSecret)
        })
      })
  })
})

module.exports = router;