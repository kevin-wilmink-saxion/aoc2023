import * as utils from '../utils/utils.js';
utils.readFile("./day1/input.txt", readData);

let result = 0;
function readData(data){
    utils.readLine(data, readLinePuzzleB);
    console.log(result);
}


const allDigits = ["one","two","three","four","five","six","seven","eight","nine"];



function readLinePuzzleB(line){

    for (let i = 0; i < line.length; i++) {
        for (let j = 0; j < allDigits.length; j++) {
            const charInDigit = allDigits[j].length;
            const digitString = allDigits[j];
            const digitNumber = j+1;
            //console.log()
            if(i+charInDigit <= line.length) {

                if (line.substring(i, i + charInDigit) === digitString) {
                    line = utils.insertIntoString(line, digitNumber, i);
                    i++;
                    break;
                }
            }
        }

    }
    readLinePuzzleA(line);
}




function readLinePuzzleA(line){
    let completeDigit = "";
    let firstDigit = -1;
    let lastDigit = -1;

    for(let i=0; i < line.length; i++){
        if(line[i] >= '0' && line[i] <= '9'){
            if(firstDigit < 0){
                firstDigit = line[i];
            }
            lastDigit = line[i];
        }
        completeDigit = firstDigit+""+lastDigit;
    }
    result += Number(completeDigit);
}




