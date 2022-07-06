var express = require('express');
var router = express.Router();
var lannisterPaySchema = require("../src/model/lannisterPayModel");


router.get('/',(req,res, next)=>{
  res.status(200).send({msg:'Hi destiny'})
})

router.post('/epay', async (req,res, next)=>{
  

  const SplitInfo = [{
    
        SplitType:"FLAT",
  
    SplitValue:"fd",
    SplitEntityId:""
}
]

  const dataSource = {
    Id:32,
    amount:4000,
    currency:"NGN",
    customerEmail:"destine@gmail.com",
    SplitInfo:SplitInfo
    
  }

  lannisterPaySchema.create(
    dataSource
  )

 res.status(200).send({msg:"Hi Destiny pay"});
    
})



module.exports = router;
