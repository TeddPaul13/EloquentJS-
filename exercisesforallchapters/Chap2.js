// Looping a Triangle

for (let harsh = "#"; harsh.length < 7; harsh = harsh+ "#"){
    //console.log(harsh)
}

//FizzBuzz
for (let number = 1; number <=100; number++){

    if(number % 3 == 0 && number % 5 == 0){
        //console.log("FizzBuzz")
    }
    else if (number % 3 == 0){
        //console.log ("Fizz")
    }else if (number % 5 == 0){
        //console.log("Buzz")
    }
    else{
        //console.log(number)
    }
    
}

//Chessboard

let boardsize = 8;
let boardSquare = " ";

for (x = 1; x<=8; x++){
    for (y=1; y<=8; y++){
        if((x+y) % 2 == 0){
            boardSquare += " "
        }else{
            boardSquare += "#"
        }
    }
    boardSquare += "\n"
}
//console.log(boardSquare)


// DataAnnotation Assessment Question
const fs = require('fs');
const messagetxt = "C:/Users/61473/Desktop/My Developments/EloquentJS-/coding_qual_input.txt"

function decode(message_file){
const fileDetails = fs.readFileSync(message_file, 'utf8');
const lines = fileDetails.split('\n');
const WordsInPyramid= [ ];

for (let i = 0; i < lines.length; i++){
const word = lines[i].split(" ")[1];
WordsInPyramid.push(word);
}
return WordsInPyramid.join(" ");
}
console.log(decode(messagetxt))