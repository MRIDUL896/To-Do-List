const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

const app = express();

mongoose.connect('mongodb://localhost/mongo_db').then(()=>{
    console.log('connected to local db');
}).catch(err=>{
    console.log('cannot connect to local db',err);
})

app.listen(process.env.PORT,()=>{
    console.log(`server started successfully in port ${process.env.PORT}`)
})