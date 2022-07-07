var express = require('express');
var router = express.Router();
var lannisterPaySchema = require("../src/model/lanPayModel");


router.get('/', async function (req, res, next) {


  const SplitInfo = [{

    SplitType: "PERCENTAGE",
    SplitValue: "3",
    SplitEntityId: "LNPYACC0015"
  }
  ]

  const dataSource = {
    ID: "1308",
    Amount: "5000",
    currency: "NGN",
    CustomerEmail: "elizabeth@gmail.com",
    SplitInfo: SplitInfo

  }

  const lannister = await new  lannisterPaySchema(dataSource);

  lannister.save(function(err,result){
    if(err) {return err}else{
      console.log(result)
    }

  });

})



module.exports = router ;
