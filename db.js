const mongoose=require('mongoose');
require('dotenv').config();

// const LOCAL_DB_URL=process.env.LOCAL_DB_URL;
const REMOTE_DB_URL=process.env.REMOTE_DB_URL;

mongoose.connect(REMOTE_DB_URL);
const db=mongoose.connection;

db.on("connected",function(){
    console.log("MongoDB database is connected...");
});

db.on("disconnected",function(){
    console.log("MongoDB database is disconnected...");
});

db.on("error",function(){
    console.log("Something went wrong while connecting to MongoDB database...");
});

module.exports=db;
