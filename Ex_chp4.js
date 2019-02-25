function range(start, end){
    let result = [];
    start = Number(start);
    end = Number(end);
    for(let i = start; i <= end; i++){
        result.push(i);
    };
    return result;
}

//console.log(range(1,100));

function sum(numArray){
    let arraySum = 0;
    for(let i of numArray){
        arraySum += i;
    }
    return arraySum;
}

//console.log(sum(range(1,10)));

function fullrange(start, end, step=1){
    let result = [];
    start = Number(start);
    end = Number(end);
    step = Number(step);
    if(step > 0){
        for(let i = start; i <= end; i += step){
            result.push(i);
        }
    }
    else if(step < 0){
        for(let i = start; i >= end; i += step){
            result.push(i);
        }
    }
    return result;
}

//console.log(fullrange(3, 10, -1));

function reverseArray(array){
    newArray = [];
    for(let i = array.length; i > 0; i--){
        newArray.push(array[i-1]);
    }
    return newArray;
}

//console.log(reverseArray([1,2,3,4,5,6,7,8]));

let sample = [1,2,3,4,5,6,7]
function reverseArrayInPlace(array){
    let size = array.length
    lastUnswappedIndex = size - 1;
    for(let i = 0; i < size/2; i++){
        let currentItem = array[i];
        array[i] = array[lastUnswappedIndex];
        array[lastUnswappedIndex] = currentItem;
        lastUnswappedIndex--;
    }
}

//reverseArrayInPlace(sample);
//console.log(sample);

function arrayToList(array){
    
}