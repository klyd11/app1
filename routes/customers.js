var express = require('express');
var router = express.Router();


router.post('/saveCustomer',function(req,res){
    var fname = req.body.fname;
    var mname = req.body.mname;
    var lname = req.body.lname;
    var address = req.body.address;
    var city = req.body.city;
    var country = req.body.country;
    var email = req.body.email;
    var contact = req.body.contact;

    var insertCustomer = {
        username: req.session.loginuser,
        fname: fname,
        mname: mname,
        lname: lname,
        address: address,
        city: city,
        country: country,
        email: email,
        contact: contact
    };

    global.customers.findOneAndUpdate({_id:req.body._id},insertCustomer,  {upsert:true},function(err,doc){
         if(!err){
            res.send("success")
        }else{
            console.log(err);
            res.send("error");
        }
    });



})


router.get('/allCustomers',function(req,res){
    global.customers.find(function(err,docs){
        if(!err){
            res.json(docs);
        }
    })
    
})


router.post('/getCustomer',function(req,res){
    console.log(req.body.id);
    global.customers.findOne({_id: req.body.id},function(err,doc){
        if(!err){
            res.json(doc);
        }
    })
    
})

module.exports = router;