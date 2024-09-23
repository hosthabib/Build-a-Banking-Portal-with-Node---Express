const express=require('express'); //Requires the express framework
const router=express.Router(); //Create an instance of the Express Router

//Use Object destructuring to import accounts from data.js
const{accounts, writeJSON}=require('../data');

// Transfer GET route
router.get('/transfer',(req,res)=>{
    res.render('transfer');
});

//Transfer POST route
router.post('/transfer',(req,res)=>{
    const{from, to, amount}=req.body;

//Calculate the new balance for the 'from' account
accounts[from].balance-=parseInt(amount);

//Calculate the new balance for the 'to' account
accounts[to].balance+=parseInt(amount);

writeJSON('accounts.json',accounts);

//Render the transfer view with a success message
res.render('transfer',{message:"Transfer Completed"});

});

//Payment GET route
router.get('/payment',(req,res)=>{
    res.render('payment',{account:accounts.credit});
});

//Payment POST route
router.post('/payment',(req,res)=>{
    //Subtract the payment amount from the credit balance
    accounts.credit.balance-=parseInt(req.body.amount);

    //Add the payment amount to the credit avaialble
    accounts.credit.available+=parseInt(req.body.amount);

    writeJSON('accounts.json',accounts);
    
    //Render the payment view with a success message and updated account info
    res.render('payment',{messge:"Payment Successful",account:accounts.credit});
});

module.exports=router;
