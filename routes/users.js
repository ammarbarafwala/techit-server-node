var express = require('express');
var router = express.Router();
var createError = require('http-errors');
const User = require('../models/user');
const {encodePassword} = require('../security/securityutils');

/* GET user. */
router.get('/:userId', function(req, res, next) {
  if(req.user.profile._id == req.params.userId)
    res.json(req.user.profile)
  else if(req.user.profile.post == 'SYS_ADMIN'){
    User.findById( req.params.userId, (err, user)=>{
      if (err) return next(createError(404, 'User not found'))
      res.json(user)
    })
  }
  else
    next(createError(403, 'Unauthorized Access'))
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.user.profile.post == 'SYS_ADMIN')
    User.find( (err, users) => {
      if (err) return next(createError(404, 'User not found'))
      res.json({title: 'Users', users: users});
    });
  else
    next(createError(403, 'Unauthorized Access'))
});

router.post('/', function(req, res, next) {
  if(req.user.profile.post != 'SYS_ADMIN') return next(createError(403, 'Unauthorized Access'))
  if(req.body.username == null || req.body.username == "" || req.body.password == null || req.body.password == "")
    return next(createError(400, "Missing username and/or password."))
  encodePassword(req.body.password,( err, hash )=>{
    req.body.hash = hash
    // delete req.body.password
    new User(req.body).save((err,user)=>{
      console.log(err)
      if (err) return next(createError(404, 'Username already exists'))
      res.json(user);
    })
  })
})

module.exports = router;
