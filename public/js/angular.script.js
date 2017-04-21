

var app = angular.module("salesinv",[]);


/*
    ============================
        INDEX PAGE
    ===========================
 */






app.controller('index',function($scope,$http,$window){


       $scope.loginuser = function(){
           var data = {
               username: $scope.username,
               pass: $scope.pass
           }
            $http.post("/users/login",data)
            .then(function(res){
                if(res == "error"){
                    alert("Failed to Login!");
                }else{
                    $window.location.href = "/main.html";
                }
            })


       }

       $scope.registeruser = function(){
            var data = {
                username: $scope.username1,
                pass: $scope.pass1,
                fname: $scope.fname,
                lname: $scope.lname,
                email: $scope.email
            };
           $http.post("/users/register",data)
           .then(function(res){
              
              if(res.data=="error"){
                  alert("Registration Failed");
              }if(res.data=="success"){
                  alert("Registration Successful!");
              }else{
                   alert("User already Exist");
              }
           })
       }



});

/*
    ============================
        MAIN PAGE
    ===========================
 */



app.controller('main',function($scope,$http,$window){

     $scope.id = "";   
    displayAllInventory();
    

    $scope.saveInventory = function(){
            var str = "Save";  
            if($scope.inv._id==""){
                str = "Update"
            }
           $http.post("/inventory/saveInventory",$scope.inv)
           .then(function(res){
              if(res.data=="error"){
                  alert(str + " Inventory Failed");
              }else{
                  alert(str +" Inventory Successful!");
              }
           })
           
    };



   
   

    $scope.newInv = true;
    $scope.allInv = false;
    $scope.class1 = "list-group-item active"
    $scope.class2 = "list-group-item"

    $scope.showPanel = function(disp){
        $scope.newInv = false;
        $scope.allInv = false;
        $scope.class1 = "list-group-item"
        $scope.class2 = "list-group-item"
        if(disp=="newInv"){
             $scope.newInv = true;
             $scope.class1 = "list-group-item active";
             $scope.inv = "";
             $scope.id = "";    
        }else{
           
             displayAllInventory();
             $scope.allInv = true;
             $scope.class2 = "list-group-item active";
        }
    }



    $scope.openInv = function(id){
        $http.post('/inventory/getInventory',{id:id})
        .then(function(res){            
            $scope.showPanel('newInv');
            $scope.inv = res.data;
            $scope.id = res.data._id;
        });
    };




    function displayAllInventory(){
         $http.get('/inventory/allinventory')
        .then(function(res){
            $scope.datatable = res.data;

        })
    }
  

})


/*
    ============================
        CUSTOMERS PAGE
    ===========================
 */



app.controller('customers',function($scope,$http,$window){

    $scope.id = "";   
    displayAllCustomers();
    

    $scope.saveCustomer = function(){  
      
           $http.post("/customers/saveCustomer",$scope.cust)
           .then(function(res){
              if(res=="error"){
                  alert("Save Customer Failed");
              }else{
                  alert("Save Customer Successful!");
              }
           })
           
    }


   
   

    $scope.newInv = true;
    $scope.allInv = false;
    $scope.class1 = "list-group-item active"
    $scope.class2 = "list-group-item"

    $scope.showPanel = function(disp){
        $scope.newInv = false;
        $scope.allInv = false;
        $scope.class1 = "list-group-item"
        $scope.class2 = "list-group-item"
        if(disp=="newInv"){
             $scope.newInv = true;
             $scope.class1 = "list-group-item active";
             $scope.id = ""; 
             $scope.cust = "";   
        }else{
           
             displayAllCustomers();
             $scope.allInv = true;
             $scope.class2 = "list-group-item active";
        }
    }



    $scope.openCust = function(id){
        $http.post('/customers/getCustomer',{id:id})
        .then(function(res){            
            $scope.showPanel('newInv');
            $scope.cust = res.data;
            $scope.id = res.data._id;
        });
    };




    function displayAllCustomers(){
         $http.get('/customers/allCustomers')
        .then(function(res){
            $scope.datatable = res.data;

        })
    }
  

})



/*
    ============================
        SALES PAGE
    ===========================
 */



app.controller('orders',function($scope,$http,$window){

    $scope.id = "";   
    //displayAllSales();
    
    $scope.availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $scope.complete=function(){
        $( "#tags" ).autocomplete({
            source: $scope.availableTags
        });
    } 



    $scope.lookupComplete = function(field,lookupto){
       
        $http.post("/users/search",lookupto)
        .then(function(res){
           

             $('#'+field).autocomplete({
                source: res.data
            });

        })


       
    }


    $scope.saveCustomer = function(){  
      
           $http.post("/sales/saveSale",$scope.cust)
           .then(function(res){
              if(res=="error"){
                  alert("Save Sale Failed");
              }else{
                  alert("Save Sale Successful!");
              }
           })
           
    }


   
   

    $scope.newInv = true;
    $scope.allInv = false;
    $scope.class1 = "list-group-item active"
    $scope.class2 = "list-group-item"

    $scope.showPanel = function(disp){
        $scope.newInv = false;
        $scope.allInv = false;
        $scope.class1 = "list-group-item"
        $scope.class2 = "list-group-item"
        if(disp=="newInv"){
             $scope.newInv = true;
             $scope.class1 = "list-group-item active";
             $scope.id = ""; 
             $scope.cust = "";   
        }else{
           
             displayAllCustomers();
             $scope.allInv = true;
             $scope.class2 = "list-group-item active";
        }
    }



    $scope.openCust = function(id){
        $http.post('/sales/getSale',{id:id})
        .then(function(res){            
            $scope.showPanel('newInv');
            $scope.cust = res.data;
            $scope.id = res.data._id;
        });
    };




    function displayAllSales(){
         $http.get('/sales/allSales')
        .then(function(res){
            $scope.datatable = res.data;

        })
    }
  

    $scope.choices = [{id: 'choice1'}];
  
    $scope.addNewChoice = function() {
        var newItemNo = $scope.choices.length+1;
        $scope.choices.push({'id':'choice'+newItemNo});
    };
        
    $scope.removeChoice = function(item) {
        //var lastItem = $scope.choices.length-1;
        $scope.choices.splice(item, 1);
        
    };


})

