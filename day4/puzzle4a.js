import * as utils from '../utils/utils.js';
let dayNr = 4;
//command one out
utils.readFile("/Users/kwi05/adventOfCode/aoc_2023/day"+dayNr+"/input.txt", readInput);
//utils.readFile("/Users/kwi05/adventOfCode/aoc_2023/day"+dayNr+"/practise.txt", readInput);


// ============================ CLASSES ============================
class Game{
    constructor(gameNr) {
        this.gameNr = gameNr;
    }

    winning = [];
    tickets = [];

    getWinningNumbers(){
        let result = [];
        for (let i = 0; i < this.tickets.length; i++) {
            let currentTicket = this.tickets[i];
            if(this.winning.includes(currentTicket)){
                result.push(currentTicket);
            }
        }
        return result;
    }
}


// ============================== CODE ===================================

//variables
let games = [];


function readInput(data){
    //create data model
    utils.readLines(data, readLine);

    let total = 0;

    for (let i = 0; i < games.length; i++) {
        let currentGame = games[i];
        let winningNumbers = currentGame.getWinningNumbers();
        let pointsGame = 0;
        if(winningNumbers.length === 0){
            pointsGame = 0;
        }else{
            pointsGame = Math.pow(2, winningNumbers.length-1);
        }


        total+=pointsGame;
    }

    console.log(total);
}

function readLine(line){
    console.log(line);

    let nwGame = new Game(line.split(": ")[0].split(" ")[1]);
    nwGame.winning = utils.filterElements(line.split(": ")[1].split(" | ")[0].split(" "), "");
    nwGame.tickets = utils.filterElements(line.split(": ")[1].split(" | ")[1].split(" "), "");


    games.push(nwGame);
}





