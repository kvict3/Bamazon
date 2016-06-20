var mysql = require("mysql");
var inquirer = require('inquirer');

var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "root",
   database: "bamazon"

});

con.connect(function(err){
	if(err) throw err;
	console.log("-----------------------------------");
	console.log("You are connected.");
	console.log("-----------------------------------");
})

con.query('SELECT * FROM products ORDER BY products.ItemID', function(err,res){
	if(err) throw err;
	for(var i=0;i<res.length;i++){
	console.log(res[i].ItemID+" | "+res[i].ProductName+" | "+res[i].DepartmentName+" | "+res[i].Price+" | "+res[i].StockQuantity);}
	console.log("-----------------------------------");
})

// var buy = function(){
	inquirer.prompt([
	{
		type: 'list',
		name: 'items',
		message: "What item would you like to buy?",
		choices: [
		"1", 
		"2", 
		"3", 
		"4", 
		"5", 
		"6", 
		"7", 
		"8", 
		"9", 
		"10", 
		"11"
		]
 	}
 	])

 	