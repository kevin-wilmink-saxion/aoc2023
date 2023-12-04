import * as utils from '../utils/utils.js';
utils.readFile("./day1/input.txt", readData);

let result = 0;

function readData(data){
    utils.readLine(data, readLine);
    console.log(result);
}



function readLine(line){

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


