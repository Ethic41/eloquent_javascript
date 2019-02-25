/* Higher Order Function */
//Flatten array

function arrayReducer(array){
    let flattened = array.reduce((accumulate, current) => {
        return accumulate.concat(current);
    }, []);
    return flattened;
}

console.log(arrayReducer([1,2,[3,4,5,[6,7,8],9,10,[11,12,13],14],15,16]));

function every(array, func){
    for ( let element of array){
        if (func(element)){
            ;
        }
        else{
            return false;
        }
    }
    return true;
}