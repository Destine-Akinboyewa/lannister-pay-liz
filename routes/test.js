var express = require('express');
var router = express.Router();
var lannisterPaySchema = require("../src/model/lanPayModel");




router.get('/',  function (req, res, next) {


 return  res.status(200).send("Hi Lannister Pay" );

})



module.exports = router ;
