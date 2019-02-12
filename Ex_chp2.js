/*Excercise 1 looping triangle*/
a = "";
for (c = 0; c < 7; c++) {
    console.log(a += "#"); //for each iteration add the length
}

/*Excercise 2 FizzBuzz*/
for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 != 0) {//check is divisible by 3 but not 5
        console.log("Fizz");
    }
    else if (i % 3 == 0 && i % 5 == 0) {//check is divisible by 3 and 5
        console.log("FizzBuzz");
    }
    else if (i % 3 != 0 && i % 5 == 0) {//check is divisible by 5 and not 3
        console.log("Buzz");
    }
    else {
        console.log(i); //print the number
    }
}
/*Excercise 3 */
strng = "";
column = 18;
row = 10;
for (i = 1; i <= row; i++) {
    if (i % 2 == 0) {
        for (x = 1; x <= column; x++) {
            if (x % 2 == 0) {
                strng += "#";
            }
            else {
                strng += " ";
            }
        }
        strng += "\n";
    }
    else {
        for (y = 1; y <= column; y++) {
            if (y % 2 != 0) {
                strng += "#";
            }
            else {
                strng += " ";
            }
        }
        strng += "\n";
    }
}
console.log(strng);
