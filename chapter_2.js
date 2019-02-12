//Functions

console.log()
let x = 20;
console.log("my value is", x);

//Return values
console.log(Math.max(23, 53));

console.log(Math.min(23, 53));

//while and do loops
result = 1;
counter = 0;
while (counter < 10) {
    result *= 2;
    counter += 1;
}
console.log(result);

//for loop
for (num = 0; num < 12; num += 2) {
    console.log(num);
}

result = 1;
for (count = 0; count < 10; count++) {
    result *= 2;
}
console.log(result)

/*break*/
for (num = 20; ; num++) {
    if (num % 7 == 0) {
        break;
    }
}
console.log(num)
