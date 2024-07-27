const express=require('express');
const employeeRouter=require('./employeeRouter.js');
const db=require('./db.js');
require('dotenv').config();

const PORT=process.env.PORT;

const app=express();
app.use(express.json());
app.use('/employee',employeeRouter);

app.listen(PORT,function(){
    console.log("Server started...");
})