
/*
============= 
MONGO DB CONNECTION 
=============
*/


var mongo = require('mongodb');
var mongodburl = "mongodb://localhost:27017/salesinventory";


var mongoose = require('mongoose');
mongoose.connect(mongodburl);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("MongoDB Connecting at " + mongodburl);
});

var usersSchema = new mongoose.Schema({
  username: String,
  pass: String,
  fname: String,
  lname: String,
  email: String,
});

var inventorySchema = new mongoose.Schema({
  username: String,
  itemname: String,
  itemdesc: String,
  quantity: Number,
  price: Number,
  sellprice: Number
});

var customersSchema = new mongoose.Schema({
  username: String,
  fname: String,
  mname: String,
  lname: String,
  address: String,
  city: String,
  country: String,
  email: String,
  contact: String
});


var ordersSchema = new mongoose.Schema({
  username: String,
  fname: String,
  mname: String,
  lname: String,
  address: String,
  city: String,
  country: String,
  email: String,
  contact: String,
  orders : { type : Array , "default" : [] }
});


global.users = mongoose.model('users', usersSchema);
global.inventory = mongoose.model("inventorys",inventorySchema);
global.customers = mongoose.model("customers",customersSchema);
global.orders = mongoose.model("orders",ordersSchema);
