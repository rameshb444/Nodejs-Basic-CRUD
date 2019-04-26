var express = require('express');
var morgan = require('morgan'); 
var app = express();
var path = require('path');
var fs = require('fs');


app.use(express.static(path.join(__dirname, 'public')));
var api = require('./controllers/api');
app.listen('3000', function(){
	console.log("API Server is started at "+new Date());
});
app.use('/api', api);
module.exports = app;


