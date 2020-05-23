var express = require('express');
var router = express.Router();

/* GET User Service. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    req_url : req.url,
    message : "User Service Running",
    timestamp : Date(Date.now()).toString()
  })
});

/* Handle a particular user deletion request. */
router.delete('/:id', function(req, res, next) {
  res.status(200).json({
    req_url : req.url,
  	loginId : req.params.id,
  	request : req.body,
    message : `${req.body.payload.first_name} ${req.body.payload.last_name} deleted.`,
    timestamp : Date(Date.now()).toString()
  })
});

module.exports = router;
