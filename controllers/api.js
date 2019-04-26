"use strict";
var fs = require('fs');
var forge = require('node-forge');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({
    extended: true
}));
var users = [];
console.log("Inside Router");
router.post('/userRegister', function(req, res) {
    console.log(req.body);
    if (req.body.username && req.body.username != "" && req.body.password && req.body.password != "") {
        var username = req.body.username;
        var password = req.body.password;
        users.push(username);
        console.log(users);
        users[username] = req.body;
        console.log(users);
        res.send("User Registered Succesfully");
    } else {
        res.send("Invalid Parameters");
    }
});
router.get('/getUser', function(req, res) {
    console.log(req.params);
    console.log(req.query);
    if (req.query.username && req.query.username != "") {
        console.log(users);
        if (users[req.query.username]) {
            res.send(users[req.query.username]);
        } else {
            res.send("User Not Found");     
        }
    } else {
        res.send("Please enter valid username");
    }
});
router.post('/updateUser', function(req, res) {
    if (req.body.username && req.body.username != "" && req.body.password && req.body.password != "") {
        if (users[req.body.username]) {
            users[req.body.username] = req.body;
            console.log(users);
            res.send("User Updated Successfully");
        } else {
            res.send("User Not Found");     
        }
    } else {
        res.send("Invalid Parameters");
    }
});
router.post('/deleteUser', function(req, res) {
    if (req.body.username && req.body.username != "") {
        if (users[req.body.username]) {
            delete users[req.body.username];
            //users.pop(users[req.body.username]);
            console.log(users);
            res.send("User Deleted Successfully");
        } else {
            res.send("User Not Found");     
        }
    } else {
        res.send("Invalid Parameters");
    }
});
module.exports = router;
