var express = require('express');
var router = express.Router();

/* GET Login Service. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    req_url : req.url,
    message : "Login Service Running",
    timestamp : Date(Date.now()).toString()
  })
});

/* Check if the POST Works */
router.post('/', function(req, res, next) {
  res.status(200).json({
    req_url : req.url,
  	request : req.body.data,
    message : "Login Handler",
    timestamp : Date(Date.now()).toString()
  })
});

/* Handle a particular Login Request with a particular login handler route */
router.post('/:route/:id', function(req, res, next) {
  res.status(200).json({
    req_url : req.url,
    route : req.params.route,
  	loginId : req.params.id,
  	request : req.body.data,
    message : "Login Handler",
    timestamp : Date(Date.now()).toString()
  })
});

module.exports = router;