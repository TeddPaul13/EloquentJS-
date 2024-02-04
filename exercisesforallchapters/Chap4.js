// The Sum of a Range

function range (start, end, step = start < end ? 1 : -1){
    let rangeArray = []
    if (step > 0){
        for (let arrayElment = start; arrayElment <= end; arrayElment+=step){
            rangeArray.push(arrayElment);
        }
    }else{
        for (let arrayElment = start; arrayElment >= end; arrayElment+= step){
            rangeArray.push(arrayElment);
        }
    }
    
    return rangeArray;
}

//console.log(range(1, 10,  2))

function sum (array){
    let total = 0
    for (let i=0; i<=array.length; i++){
 total += i
    }
    return total
    }
//console.log(sum([1,2,3,4]))

// Reversing an Array

function reverseArray (array) {
    let reversedArray = [];
for (let element = array.length-1; element >=0; element--){
    reversedArray.push(array[element])
}
return reversedArray
};
//console.log(reverseArray([1,2,3,4]))
function reverseArrayInPlace (array){

for (let element=0; element<Math.floor(array.length / 2); element++){
    let oldElement = array[element];
    array[element] = array[array.length - 1 -i];
    array[array.length -1 - i] = oldElement;
}
return array
};

// A list

function arrayToList (array){
    let list = null
    for (let i = array.length-1; i>=0; i--){
        list = {value: array[i], rest: list};
    }
    return list
};
//console.log (arrayToList([20,30,40,50]))

function listToArray (list){
    let array = []
    for(let node = list; node; node=node.rest){
        array.push(node.value)
    }
    return array

};
function prepend(value, list) {
    return {value, rest: list};
  }
  
  function nth(list, n) {
    if (!list){return undefined;}
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }

  // Deep Comparison

  const  deepEqual = (one, two) =>{

if(one === two) {
return true;
}
if(one == null || typeof one != "object" || two == null || typeof two != "object"){
    return false
}
let keyOne = Object.keys(one);
let keyTwo = Object.keys(two);

if (keyOne.length != keyTwo.length){
    return false
}
for (let key of keyOne){
    if (!keyTwo.includes(key) || !deepEqual(one[key], two[key])){
        return false
    }
}
return true;
  }

  let obj = {names : "ted", age: 10}
  console.log(deepEqual(obj, obj))