const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./Routes/routes');
dotenv.config();
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/mongo_db').then(()=>{
    console.log('connected to local db');
}).catch(err=>{
    console.log('cannot connect to local db',err);
})

app.use('/api/v1/myTasks',router)

app.listen(process.env.PORT,()=>{
    console.log(`server started successfully in port ${process.env.PORT}`)
})