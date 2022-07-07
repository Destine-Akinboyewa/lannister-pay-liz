var express = require('express');
var router = express.Router();
var lannisterPaySchema = require("../src/model/lannisterPayModel");


// router.get('/',(req,res, next)=>{
//   res.status(200).send({msg:'Hi destiny'})
// })

router.get('/', async function (req, res, next) {


  const SplitInfo = [{

    SplitType: "FLAT",
    SplitValue: "450",
    SplitEntityId: "LNPYACC0019"
  }
  ]

  const dataSource = {
    ID: "32",
    Amount: "4000",
    currency: "NGN",
    CustomerEmail: "destine@gmail.com",
    SplitInfo: SplitInfo

  }

  const lannister = await new  lannisterPaySchema(dataSource);

  lannister.save(function(err,result){
    if(err) {return err}else{
      console.log(result)
    }

  });

//  return  res.status(200).send("Hi Destiny pay" );

})



module.exports = router ;
