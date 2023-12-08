import * as utils from '../utils/utils.js';
let dayNr = 6;
//command one out
utils.readFile("/Users/kwi05/adventOfCode/aoc_2023/day"+dayNr+"/input.txt", readInput);
//utils.readFile("/Users/kwi05/adventOfCode/aoc_2023/day"+dayNr+"/practise.txt", readInput);


// ============================ CLASSES ============================



// ============================== CODE ===================================

//variables
let timeArr = [];
let destinationArr =[];



function readInput(data){
    //create data model
    utils.readLines(data, readLine);

    let winPerGame = [];
    for (let i = 0; i < timeArr.length; i++) {
        let nrWinStrategies = 0;
        for (let press = 0; press <= Number(timeArr[i]); press++) {
            let distance = getDistance(press, timeArr[i]);
            if(distance > Number(destinationArr[i])){
                nrWinStrategies++;
            }
        }
        winPerGame.push(nrWinStrategies);
    }


    let result = winPerGame[0];
    for (let i = 1; i < winPerGame.length; i++) {
        result *= winPerGame[i];
    }

    console.log(result);
}


function getDistance(button, totalTime){
    let travelTime = totalTime - button;
    return travelTime * button;
}

function readLine(line){
    console.log(line);


    if(timeArr.length ===0){
        let timeArrTmp  = line.split(":")[1].trim().replace(/\s+/g, '.').split(".");
        let time = "";
        for (let i = 0; i < timeArrTmp.length; i++) {
            time += timeArrTmp[i]+"";
        }
        timeArr.push(Number(time));
    }else{
        let destinationArrTmp = line.split(":")[1].trim().replace(/\s+/g, '.').split(".");
        let dest= "";
        for (let i = 0; i < destinationArrTmp.length; i++) {
            dest += destinationArrTmp[i]+"";
        }
        //destinationArr = Number(destinationArr);
        destinationArr.push(Number(dest));
    }

}


