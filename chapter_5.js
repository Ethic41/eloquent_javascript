/* Higher Order Functions */

// a function that creates a new function
function greaterThan(n){
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
//console.log(greaterThan10(11));

//a function that change other functions
function noisy(f){
    return (...args) => {
        console.log(`calling with ${args}`);
        let result = f(...args);
        console.log(`called with ${args} returned ${result}`);
        return result;
    };
}
//noisy(Math.max)(3,2,1);

//funtion for new control flow
function unless(test, then){
    if (!test) then();
}

//custom repeat function
function repeat(n, action){
    for(let i = 0; i < n; i++){
        action();
    }
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        //console.log(`${n} is even`);
    });
});

//forEach higher order function
let newarray = [1,2,3,4,5];
//newarray.forEach(i => console.log(i));

//filtering arrays with our custom built function
function filter(array, test){
    let passed = [];
    for (let element of array){
        if (test(element)){
            passed.push(element);
        }
    }
    return passed;
}

//in-build filter function
console.log(newarray.filter(i => i % 2 == 0));

//built-in map function
function map(array, transform){
    let mapped = [];
    for ( let element of array){
        mapped.push(transform(element));
    }
    return mapped;
}

function reduce(array, combine, start){
    let current = start;
    for (let element of array){
        current = combine(current, element);
    }
    return current;
}

function average(array){
    return array.reduce((a, b) => a + b) / array.length;
}

console.log(newarray.some((i) => {
    if(i > 4){
        //console.log(i);
    }
}));

let horseshoe = "🐴👟";
console.log(`horse shoe length: ${horseshoe.length}`);