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
			 	},
			 	{
			 		type: 'input',
			 		name: 'amount',
			 		message: 'How many would you like to buy?',
			 		validate: function(value) {
			 			if (isNaN(value) == true || value == null) {
			 				console.log('Invalid number, enter a valid number');
			 				return false;
			 			}
			 			return true;
			 		}
			 	}
				]).then(function(answer){

						con.query("SELECT * FROM products WHERE ItemID ='"+answer.items+"'", function(err, res){


						con.query("UPDATE products SET StockQuantity ='"+(res[0].StockQuantity - answer.amount)+"' WHERE ItemID ='"+answer.items+"'");
					})
									})
