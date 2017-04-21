var express = require('express');
var router = express.Router();

router.post('/saveinventory',function(req,res){
    var itemname = req.body.itemname;
    var itemdesc = req.body.itemdesc;
    var quantity = req.body.quantity;
    var price = req.body.lname;
    var sellprice = req.body.email;

    var insertItem = {
        itemname: itemname,
        itemdesc: itemdesc,
        quantity: quantity,
        price: price,
        sellprice: sellprice
    };

    global.products.insertOne(insertItem,function(err,doc){
        if(!err){
            res.send("success")
        }else{
            console.log(err);
            res.send("error");
        }
    });



})




module.exports = router;