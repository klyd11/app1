var express = require('express');
var router = express.Router();

router.post('/saveInventory',function(req,res){
    var itemname = req.body.itemname;
    var itemdesc = req.body.itemdesc;
    var quantity = req.body.quantity;
    var price = req.body.price;
    var sellprice = req.body.sellprice;

    var insertInventory = {
         username: req.session.loginuser,
        itemname: itemname,
        itemdesc: itemdesc,
        quantity: quantity,
        price: price,
        sellprice: sellprice
    };

    global.inventory.findOneAndUpdate({_id:req.body._id},insertInventory,  {upsert:true},function(err,doc){
        console.log(doc);
        if(!err){
            res.send("success")
        }else{
            console.log(err);
            res.send("error");
        }
    });



});





router.get('/allinventory',function(req,res){
    global.inventory.find(function(err,docs){
        if(!err){
            res.json(docs);
        }
    })
    
})


router.post('/getInventory',function(req,res){
    console.log(req.body.id);
    global.inventory.findOne({_id: req.body.id},function(err,doc){
        if(!err){
            res.json(doc);
        }
    })
    
})

module.exports = router;