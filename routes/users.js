var express = require('express');
var router = express.Router();
var createError = require('http-errors');
const User = require('../models/user');
const Ticket = require('../models/ticket');

router.get('/:userId/tickets', function (req, res, next) {
	if( req.user.profile.post == 'SYS_ADMIN'
			|| req.user.profile.post == 'SUPERVISING_TECHNICIAN'
			|| req.user.profile._id == req.params.userId){
		Ticket.find({
			requester: req.params.userId
		}, (err, tickets)=>{
			if (err) return next(err)
			res.json({title: 'Tickets Requested', tickets})
		})
	}
	else
		next(createError(403, 'Unauthorized Access'))
})

module.exports = router;
