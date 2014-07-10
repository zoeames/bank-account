//app.js
//
//Bank Account
//
//This program starts you off with an initial balance of $1000.  Then
//allows you do withdrawl or deposit funds.  If your balance goes below
//0 you get charged a $50 penalty.  Then it tells you your total deposit,
//total withdrawl, and final balance.
//
//Z. Ames 7/10/14


var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

//variables
var balance = 1000

var deposit = []
var withdrawl = []

//
console.log(chalk.blue('Welcome to the Bank!'));
console.log(chalk.blue('Your starting amount is ')+chalk.cyan(balance.toFixed(2)) +chalk.blue(' dollars.'));
// prompt for withdrawl, deposit, quit
var  menu=prompt(chalk.yellow('Would you like to (d)eposit/(w)ithdraw/(q)uit? '));

//assign amounts to withdrawl or deposit arrays
while (menu != 'q'){
if (menu === 'd'){
  var amountD = prompt(chalk.green('How much would you like to deposit? '));
  amountD=parseFloat(amountD)
  deposit.push(amountD)
  menu=prompt(chalk.yellow('Would you like to (d)eposit/(w)ithdraw/(q)uit? '));
}else if (menu === 'w'){
  var amountW = prompt(chalk.red('How much would you like to withdrawl? '));
  amountW=parseFloat(amountW)
  withdrawl.push(amountW)
  menu=prompt(chalk.yellow('Would you like to (d)eposit/(w)ithdraw/(q)uit? '));
}else{
break;
}}
//sum up deposits
var sumDep = 0;
for (i=0; i<deposit.length; i++){
sumDep=sumDep+deposit[i]}


//sum up withdrawls
var sumWith = 0;
for (j=0; j<withdrawl.length; j++){
sumWith=sumWith+withdrawl[j]}
//Add or subtract from total
var finalBal = balance+sumDep-sumWith 

//overdraft
if (finalBal<0){
finalBal = finalBal-50
}


//print outputs
console.log(chalk.blue('Your total ') + chalk.green('deposit ') + chalk.blue('is ')+chalk.green(sumDep)+chalk.blue(' dollars.'));
console.log(chalk.blue('Your total ') + chalk.red('withdrawl ') + chalk.blue('is ')+chalk.red(sumWith)+chalk.blue(' dollars.'));
//overdraft
if (finalBal<0){
  console.log('Your balance is less than 0 dollars.')
  console.log('You have received a 50 dollar fee.')
  finalBal = finalBal-50;
  console.log(chalk.blue('Your ') + chalk.cyan('final balance ') + chalk.blue('is ')+chalk.cyan(finalBal.toFixed(2))+chalk.blue(' dollars.'));
}else{
  console.log(chalk.blue('Your ') + chalk.cyan('final balance ') + chalk.blue('is ')+chalk.cyan(finalBal.toFixed(2))+chalk.blue(' dollars.'));
}
