// this is for codes that cannot run in node
/*control flow*/
var theNumber = Number(prompt("pick a number", ""));
alert("Your number is the square-root of", theNumber * theNumber);

/*conditional execution*/
var theNumber = Number(prompt("pick a number", ""));
if (!isNaN(theNumber)){
  alert("Your number is the square-root of", theNumber*theNumber);
}
else {
  alert("Your input is not a Number");
}

/*more conditional execution*/
if (theNumber < 10){
  alert("Small!");
}else if (theNumber < 100){
  alert("Medium!");
}else {
  alert("Large!");
}
