const mongoose = require("mongoose")
require('dotenv').config()

async function dbConnect(){
  try{
    await mongoose
    .connect(`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.izuch.mongodb.net/augmont_merchant?retryWrites=true&w=majority`, { useNewUrlParser: true })
  }catch(err) {console.log(err)}
}

module.exports =  dbConnect;