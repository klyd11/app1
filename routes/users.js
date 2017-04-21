var express = require('express');
var router = express.Router();


router.post('/login', function(req, res) {

    var username = req.body.username;
    var pass = req.body.pass;
   
    //Search the user
    global.users.find({username:username,pass:pass},function(err,doc){
        if(!err && doc != null){
            req.session.loginuser = username;
            res.send("user found");
          
        }else{
            console.log("==========ERROR================")
            console.log(err);
            res.send("error");
        }
    });
    
    

});


router.post('/logout',function(req,res){
    req.session.loginuser = "";
})


router.post('/search',function(req,res){
    var search = req.body.search;
    var searchstr = {};
    if (search=="fname"){
        searchstr = {fname:search};
    }
    global.users.find(searchstr,function(err,docs){
        
    })
})


router.post('/register',function(req,res){
    var username = req.body.username;
    var pass = req.body.pass;
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;

    var insertUser = {
        username: username,
        pass: pass,
        fname: fname,
        lname: lname,
        email: email
    };
    global.users.findOne({username:username},function(err,doc){
        if(!err && doc != null){
            console.log("user found in user table");
            res.send("User Found!");
        }else{
             global.users.create(insertUser,function(err,doc){
                if(!err && doc != null){
                    console.log("success register");
                    res.send("success");
                }else{
                    console.log(err);
                    res.send("error");
                }
            });
        }
    });

   



})


module.exports = router;