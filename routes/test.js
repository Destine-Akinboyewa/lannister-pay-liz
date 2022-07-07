var express = require('express');
var router = express.Router();
var lannisterPaySchema = require("../src/model/lannisterPayModel");




router.get('/',  function (req, res, next) {


 return  res.status(200).send("Hi Destiny pay" );

})



module.exports = router ;
