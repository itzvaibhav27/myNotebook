const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/mynotebook";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("db.js >>> connectToMongo >>> Connection Success with Mongo.")
    })
}

module.exports = connectToMongo;