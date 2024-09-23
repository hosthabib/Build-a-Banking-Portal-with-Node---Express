const express=require('express'); //Requires the express framework
const router=express.Router(); //Create an instance of the Express Router

//Use Object destructuring to import accounts from data.js
const{accounts}=require('../data.js');


//Savings route
router.get('/savings',(req,res)=>{
    res.render('account',{account:accounts.savings});
});

//Checking route
router.get('/checking',(req,res)=>{
    res.render('account',{account:accounts.checking});
});

//Credit route
router.get('/credit',(req,res)=>{
    res.render('account',{account:accounts.credit});
});

module.exports=router;
