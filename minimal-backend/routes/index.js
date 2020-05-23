var express = require('express');
var router = express.Router();

var usersRouter = require('./users');
var loginRouter = require('./login');

router.use('/users', usersRouter);
router.use('/login', loginRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
  	req_url : req.url,
    message : "Server Running",
    timestamp : Date(Date.now()).toString()
  })
});

module.exports = router;