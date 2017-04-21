var express = require('express');
var router = express.Router();



router.get('/allOrders',function(req,res){
    global.customers.find(function(err,docs){
        if(!err){
            res.json(docs);
        }
    })
    
})


router.post('/getOrder',function(req,res){
    console.log(req.body.id);
    global.orders.findOne({_id: req.body.id},function(err,doc){
        if(!err){
            res.json(doc);
        }
    })
    
})

module.exports = router;