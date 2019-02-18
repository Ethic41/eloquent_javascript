//chapter 4: Data Structures
/* Arrays */
let listOfNumber = [2, 3, 5, 7, 11];
console.log(listOfNumber[2])

/*Methods*/
let doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence.pop());
console.log(sequence);

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
day1.wolf = false;
console.log(day1);

let journal = [
    {"events": ["worked", "touched tree", "pizza", "running", "television"],
    "squirrel": false},
    {"events": ["work", "ice cream", "cauli flower", "lasagna", "touched tree", "brush teeth"],
    "squirrel": false},
    {"events": ["weekend", "cycling", "break", "peanuts", "beer"],
    "squirrel": true}
];

const score = {visitors: 0, home: 0}
//this is okay
score.visitors = "time is one";
console.log(score);

/*jacques journal */
journal = [];

function addEntry(events, squirrel){
    journal.push({events, squirrel});
}

addEntry(["worked", "touched tree", "pizza", "running", "television"], false);
addEntry(["worked", "ice cream", "cauli flower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

let todoList = [];
function remember(task){
    todoList.push(task)
}

function getTask(){
    return todoList.shift();
}

function rememberUrgently(task){
    todoList.unshift(task);
}

console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4].slice(2));

console.log("   okay  \n\t\r".trim());
console.log(String(6).padStart(3, "0"));

let sentence = "secretarybirds specialize in stomping";
let word = sentence.split(" ");
console.log(word);
console.log(word.join(". "));
console.log("LA".repeat(3));

function max(...numbers){
    let result = -Infinity;
    for(let number of numbers){
        if(number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, 3, 5, 2, 22, 34));

let list = [1, 3, 4, 5, 6, 6];
for(num of list){
    console.log(num);
}

let numbers = [5, 1, 7];
console.log(max(...numbers));

let words = ["never", "fully"];
console.log(["you", "will", ...words, "understand"]);

function randomPointOnCircle(radius){
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle), y: radius * Math.sin(angle)};
}

console.log(randomPointOnCircle(2));

mack = [];
mack.push("Tahir");
mack.push("The", "Knife");

console.log(mack);
console.log(mack.join(" "));
console.log(mack.pop());
console.log(mack)

/*Objects*/
anObject = { left: 1, right: 2 };
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

/*More Objects*/
object1 = { value: 10 };
object2 = object1;
object3 = { value: 10 };

console.log(object1 == object2);
console.log(object1 == object3);
object1.value = 15;
console.log(object2.value);
console.log(object3.value);

/*object final analysis*/
map = {};
function storePhi(event, phi) {
    map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
console.log(map["touched tree"]);
