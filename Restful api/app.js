// https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm

// https://www.youtube.com/watch?v=bnCOyGaSe84

//install express with npm install express
var express = require('express');
var app = express();
var fs = require("fs");

json_path = __dirname + "/" + "users.json";
stringEncode =  'utf8'

//build the new user data
var user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }


//show all list user

app.get('/listUsers', function (req, res) {
   fs.readFile(json_path, stringEncode, function (err, data) {
      console.log( data );
      res.end( data );
   });
})

 
 //add user data form the following link
 app.get('/setUser/:id/:name/:password/:profession', function (req, res) {
    // First read existing users.
    fs.readFile(json_path, stringEncode, function (err, data) {

      username = "user"+req.params.id
      var newUser =  {
            "name" : req.params.name,
            "password" : req.params.password,
            "profession" : req.params.profession,
            "id": req.params.id
         }
       
       data = JSON.parse( data );
       //data["user4"] = user["user4"];
       data[username] = newUser;
       console.log( data );
       fs.writeFileSync(json_path,JSON.stringify(data))
       res.end( JSON.stringify(data));
    });
 })

 //delete users
 app.get('/deleteUser/:id', function (req, res) {
    // First read existing users.
    fs.readFile( json_path,stringEncode, function (err, data) {
       data = JSON.parse( data );
       delete data["user" + req.params.id];
       console.log( data );
       fs.writeFileSync(json_path,JSON.stringify(data))
       res.end( JSON.stringify(data));
    });
 })


 //show user details
 app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile(json_path,stringEncode, function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })

  //test multiple parameter style one
  app.get('/data/:one/:two', function (req, res) {
      dataObj = {"first":req.params.one,"second":req.params.two}
      console.log( dataObj );
      res.end( JSON.stringify(dataObj));
})

  //test multiple parameter style two
 // http://localhost:8081/multiple/one&two&three
  app.get('/multiple/:one&:two&:three', function (req, res) {
 
   dataObj = {"one":req.params.one,"two":req.params.two,"three":req.params.three}
   console.log( dataObj );
   res.end( JSON.stringify(dataObj));

})



//final setup for api
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
