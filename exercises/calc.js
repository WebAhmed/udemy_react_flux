var readline = require('readline-sync');

var num1 = readline.question("Please enter a number ");
var num2 = readline.question("Please enter another number ");
var operator = readline.question("Please enter an operator (+, - , / , * ) ");

var operation = function(first_num, second_num, operator){
  if(!isNaN(first_num) || !isNan(second_num)){
    var result = eval(first_num + operator + second_num);
    console.log(first_num + " " + operator + " " + second_num + " = " + result) 
  }
};

operation(num1, num2, operator);