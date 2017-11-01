// this is for codes that cannot run in node
/*control flow*/
var theNumber = Number(prompt("pick a number", ""));
alert("Your number is the square-root of "+theNumber * theNumber);

/*conditional execution*/
var theNumber = Number(prompt("pick a number", ""));
if (!isNaN(theNumber)){
  alert("Your number is the square-root of " + theNumber*theNumber);
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
/*do-while loop*/
do{
  name = prompt("Enter ur Name: ", "");
}while(!name);
alert(name);

/*switches*/
switch(prompt("What is the weather like today?")){
  case "rainy":{
    console.log("Don't Forget to take an Umbrella.");
    break;
  }
  case "sunny":{
    console.log("Dress Lightly.");
    break;
  }
  case "cloudy":{
    console.log("it is advisable to go out today.");
    break;
  }
  default:{
    console.log("Unknown weather type.");
    break;
  }
}
