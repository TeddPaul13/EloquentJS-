//Minimum

function findMinimum (firstarg, secondarg) {
    if (firstarg > secondarg){
        console.log(`${secondarg} is the minimum`)
    }else{
        console.log(`${firstarg} is the minimum`)
    }
}
//findMinimum("tedd", "paul")

//Recursion

const isEven = (numtoCheck) => {
    if (numtoCheck == 0){
        return "true"
    }else if (numtoCheck == 1){
        return "false"
    }else if (numtoCheck < 0){
        return isEven(-numtoCheck)
    }else{
        return isEven(numtoCheck - 2)
    }
    
}
//console.log(isEven(-1));

// BEAN COUNTING

function countBs (stngtoCheck){
  return countChar(stngtoCheck, "B")
}

function countChar(stringtoCheck, chartoCheck){
    let numberOfChar = 0;
    for (let count = 0; count < stringtoCheck.length; count++){
        
        if (stringtoCheck[count] === chartoCheck){
            numberOfChar++
        }
    }
    return numberOfChar
}
console.log(countChar("tteddy", "t"))