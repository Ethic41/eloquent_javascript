/*defining a function*/

square = function(x){
  return x*x;
}
console.log(square(12));

makeNoise = function(){
  console.log("Pinggg...");
}
makeNoise();

power = function(base, exponent){
  result = 1;
  for(i=1; i<=exponent; i++){
    result*=base;
  }
  return result;
}
console.log(power(2,3))

/*local and global scope*/
x = "global varible";

f1 = function(){
  x = "am a local var";
}
f1();
console.log(x);

/*Nested Scope ==> lexical scoping*/
landscape = function(){
  result = "";
  flat = function(size){
    for(i=0; i<size; i++){
      result+="_";
    }
  }
  mountain = function(size){
    result += "/";
    for(i=0; i<size; i++){
      result += "''";
    }
    result += "\\";
  }
  flat(3);
  mountain(4);
  flat(4);
  mountain(2);
  flat(1);
  return result;
}

console.log(landscape());

/*functon Declartion*/
future();
function future(){
  console.log("We still don't have flying cars");
}

/*the call stack*/
function greet(who){
  console.log("Hello "+who);
}
greet("harry");
console.log("Bye");

/*optional arguments*/
function power(base, exponent){
  if (exponent == undefined){
    exponent = 2;
  }
  result = 1;
  for (i=0; i<exponent; i++){
    result *= base;
  }
  return result;
}
console.log(power(4));
console.log(power(4, 3));

/*closure*/
function wrapValue(n){
  localVariable = n;
  return function(){return localVariable;};
}

wrap1 = wrapValue(2);
wrap2 = wrapValue(3);
console.log(wrap1());
console.log(wrap1());

function multiplier(factor){
  return function(number){
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));
console.log(twice(6));

/*Recursion*/

function power(base, exponent){
  if(exponent == 0){
    return 1;
  }
  else{
    return base * power(base, exponent -1);
  }
}

console.log(power(8, 4));


/*Growing functions*/
function printFarmInventory(cows, chickens){
  cowString = String(cows);
  while(cowString.length < 3){
    cowString = "0"+cowString;
  }
  console.log(cowString+ " Cows");
  chickensString = String(chickens);
  while(chickensString.length < 3){
    chickensString = "0"+chickensString;
  }
  console.log(chickensString + " Chickens");
}

printFarmInventory(12, 8);
