

const mongoose = require("mongoose");

function dbConnection(){
  const url =  'mongodb+srv://dido_destine:14April2000@cluster-destine.jzghe2i.mongodb.net/?retryWrites=true&w=majority';
    try{
        mongoose.connect(url)
    .then( () => {
        console.log('Connected to database ')
    });

    }catch(err){
        console.error("Connection error here", err)
    }
}

module.exports = dbConnection