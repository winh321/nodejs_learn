const { table } = require('console');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"mydb"
});

function createDatabase(name){
    con.query(`CREATE DATABASE ${name} `, function (err, result) {
        if (err) throw err;
        console.log("Database created");
      });
}

function createTable(name){
    var sql = `CREATE TABLE ${name} (name VARCHAR(255), address VARCHAR(255))`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
}

function insertData(name,address){
    var sql = `INSERT INTO customers (name, address) VALUES ('${name}', '${address}')`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}

function showData(){
    //show with limit : SELECT * FROM customers LIMIT 5
    // show by order : SELECT * FROM customers ORDER BY your_column
    // show with first letter : `SELECT * FROM customers WHERE ${column} LIKE '${word}%'`

    con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
}

function dataListFromColumn(column,data){
    con.query(`SELECT * FROM customers WHERE ${column} = '${data}'`, function (err, result) {
        if (err) throw err;
        console.log(result);
      });   
}

function multiParameter(name,adr){
    var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
    con.query(sql, [name, adr], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
}


function deleteData(column,data){
    var sql = `DELETE FROM customers WHERE ${column} = '${data}'`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
}

function deletedTable(table){
    var sql = `DROP TABLE IF EXISTS ${table}`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
}


function updateData(column,replace,data){
    var sql = `UPDATE customers SET ${column} = '${data}' WHERE address = '${replace}'`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
}

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //createTable("mydb")
  //createTable("customers")

  //insertData("Maung Maung","mgway")
  //showData()
  //whereData("address","mandalay")
  //showFirst("address","m")
  //multiParameter("Maung Maung","mgway")
  //showWithOrder("name");
  //showWithOrder("address")
  //deleteData("name","su su")
  //deletedTable("bio")
  //updateData("address","mgway","taungyi")
  
});
