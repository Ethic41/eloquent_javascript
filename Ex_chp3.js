/*Excercise 1 Minimum*/
function minim(a, b) {
    if (a <= b) {
        return a;
    }
    else {
        return b;
    }
}

console.log(minim(0, 0));


/*Excercise 2 Recursion*/
function isEven(num) {
    if (num == 0) {
        return true;
    }
    else if (num == 1) {
        return false;
    }
    else if (num < 0) {
        return isEven(num + 2); //since the number is negeative we are taking it close to zero
    }
    else {
        return isEven(num - 2); //since the number is positive we are taking it close to zero
    }
}

console.log(isEven(-4));

/*Excercise 3 Bean Counting*/
function countBs(word) {
    count = 0;
    for (i = 0; i < word.length; i++) {
        if (word.charAt(i) == "B") {
            count += 1;
        }
    }
    return count;
}

//console.log(countBs("ThisBsareSoBooBin"));

/*Excercise 3a countChars*/
function countChars(word, char) {//count any given char in the word
    count = 0;
    for (i = 0; i < word.length; i++) {
        if (word.charAt(i) == char) {
            count += 1;
        }
    }
    return count;
}

console.log(countChars("AsddsAdfAAA", "d"));

/*Excercise 3b countBs update*/
function countBsUpdate(word) {
    count = countChars(word, "B");
    return count;
}

console.log(countBsUpdate("BBadfBbsdBB"));
