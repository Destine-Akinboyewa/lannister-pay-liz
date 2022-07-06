const mongoose = require("mongoose");


const SplitInfo = [
    {
        SplitType:{
        type:String,
       enum: ["FLAT","RATIO","PERCENTAGE"]
    },
    SplitValue:{
        type:String
    },
    SplitEntityId:{
        type:String
    }
}
]
const lannisterPaySchema = mongoose.Schema({
ID:{
    type:String,
    require:true
},
Amount:{
    type:String
},

Currency:{
    type:String,
    default:"NGN"
},
CustomerEmail:{
    type:String
},
SplitInfo:{
    SplitInfo
},


})

module.exports = mongoose.model("lannisterPay",lannisterPaySchema);