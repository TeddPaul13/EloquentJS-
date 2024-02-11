// Flattening

let arrays = [[1,2,3], [4,5], [6]]

arrays.reduce((flat, current) => flat.concat(current), [])

//Your own loop

function loop (initial, test, update, body){
for(let value = initial; test(value); value = update(value)){
body(value)
}
}
//Everything 

function every(array, predicate){
    for (let element of array){
        if (!predicate(element)){
            return false
        }
    }
    return true;
}
function everyWithSome (array, predicate){
    return !array.some(element => !predicate(element));
}

// Dominant Writing Direction

function dominantTextDirection (text){
    let counted = countBy(text, char =>{ // Throwing an error countBy undefined.
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({name}) => name != "none");

    if (counted.length == 0){
        return "ltr"
    }
    return counted.reduce((a,b)=> a.count > b.count ? a : b).name;
}
console.log(dominantTextDirection("Teddy"))