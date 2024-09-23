const express=require('express');
const accountRoutes=require('./routes/accounts');
const servicesRoutes=require('./routes/services');
const app=express();
const fs=require('fs');
const path =require('path');
const{accounts,users, writeJSON}=require('./data'); //Importing from data.js
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));

//Middleware to parse URL-encoded POST data
app.use(express.urlencoded({extended:true}));

//Use the accountRoutes for routes starting with /account
app.use('/account', accountRoutes);

//Use the servicesRoutes for routes starting with /services
app.use('/services', servicesRoutes);

//Root route
app.get('/',(req,res)=>{
    res.render('index',{title:'Accounts Summary', accounts:accounts});
});


//Profile route
app.get('/profile',(req,res)=>{
    res.render('profile',{user:users[0]});
});

//Start the server and lsiten on port 3000
app.listen(3000,()=>{
    console.log('PS Project Running on port 3000!');
});
