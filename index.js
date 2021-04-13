require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect(process.env.MONGODB_CONNECTION_URL, 
    {userNewUrlParser: true, useUnifiedTopology:true},
    (error)=> {error ? console.log(error) : console.log('MongoDB is working')
    }
);

app.use('/user', express.json(), userRouter);
app.get('/', (req,res)=>{res.render('index')});
app.listen(process.env.PORT, ()=>{console.log('running on port'+ process.env.PORT)});
