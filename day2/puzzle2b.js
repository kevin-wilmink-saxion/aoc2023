import * as utils from '../utils/utils.js';
utils.readFile("/Users/kwi05/adventOfCode/aoc_2023/day2/input.txt", readData);


class Game{
    static LASTGAMEID = 1;
    constructor() {
        this.gameNr = Game.LASTGAMEID;
        Game.LASTGAMEID++;
    }

    isPossible(maxRed, maxBlue, maxGreen){
        for (let i = 0; i < this.rounds.length; i++) {
            if(!this.rounds[i].isPossible(maxRed, maxBlue, maxGreen)){
                return false;
            }
        }
        return true;
    }

    getHighestNeeded(color){
        let highest = 0;
        for (let i = 0; i < this.rounds.length; i++) {
            let current = 0;

            if(color === "red"){
                current = this.rounds[i].red;
            }else if(color === "green"){
                current = this.rounds[i].green;
            }else if(color === "blue"){
                current = this.rounds[i].blue;
            }


            if( current > highest && current > 0){
                highest = current;
            }
        }
        if(highest === 99999990){
            console.log("color not in game? " + color);
        }
        return highest;
    }

    gameNr = -1;
    rounds = [];

}

class Round{
    red = 0;
    blue = 0;
    green = 0;

    isPossible(maxRed, maxBlue, maxGreen){
        return this.red <= maxRed && this.blue <= maxBlue && this.green <= maxGreen;
    }

    getLowestNeeded(color){

    }
}



// ==================================================================================================
let games = [];


function readData(data){
    //create data model
    utils.readLines(data, readLine);

    let result = 0;
    //check for valid
    for (let i = 0; i < games.length; i++) {
        /*
        if(games[i].isPossible(12, 14, 13)){
            result += games[i].gameNr;
        }*/
        const highestRed = games[i].getHighestNeeded("red");
        const highestGreen = games[i].getHighestNeeded("green");
        const highestBlue = games[i].getHighestNeeded("blue");

        result += (highestRed * highestGreen * highestBlue);
    }

    console.log(result)
}

function readLine(line){
    let nwGame = new Game();
    games.push(nwGame);

    const withoutGame = line.split(": ")[1];
    let rounds = withoutGame.split("; ");
    for (let i = 0; i < rounds.length; i++) {
        nwGame.rounds.push(createRound(rounds[i]));
    }

}

function createRound(roundLine){
    const nwRound =  new Round();
    console.log(roundLine);
    const colorLines = roundLine.split(", ");

    for (let i = 0; i < colorLines.length; i++) {
        let colorArray = colorLines[i].split(" ");
        if(colorArray[1] === "blue"){
            nwRound.blue = Number(colorArray[0]);
        }else if(colorArray[1] === "red"){
            nwRound.red = Number(colorArray[0]);
        }else if(colorArray[1] === "green"){
            nwRound.green = Number(colorArray[0]);
        }
    }

    return nwRound;
}

