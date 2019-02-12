//chapter 4: Data Structures
/*Methods*/
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
