var express = require('express');
var app = express();
var expressSession = require('express-session');
var bodyParser = require('body-parser');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');


var database = require('./lib/database');



// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))



//app.set('view engine', 'ejs');



app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/inventory', require('./routes/inventory'));
app.use('/customers', require('./routes/customers'));

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Sales Inventory listening at http://%s:%s", host, port)
})