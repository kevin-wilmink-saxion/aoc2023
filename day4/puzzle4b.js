import * as utils from '../utils/utils.js';
let dayNr = 4;
//command one out
utils.readFile("/Users/kwi05/adventOfCode/aoc_2023/day"+dayNr+"/input.txt", readInput);
//utils.readFile("/Users/kwi05/adventOfCode/aoc_2023/day"+dayNr+"/practise.txt", readInput);


//improve performance by using a map?

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

    total = games.length;

    for (let i = 1; i <= games.length; i++) {
        let wins = getTotalWinsGame(i);
        //console.log("wins: " + i + " : " + wins)
        total+= wins;

    }

    console.log(total);
}

function getTotalWinsGame(gameNr){
    let game = games[gameNr-1];
    let winningGames = game.getWinningNumbers().length;


    let totalWins = winningGames;
    for (let i = 0; i < winningGames; i++) {
        totalWins += getTotalWinsGame(gameNr+i+1); //gameNr starts at 1
    }

    return totalWins;
}

function readLine(line){
    //console.log(line);

    let nwGame = new Game(line.split(": ")[0].split(" ")[1]);
    nwGame.winning = utils.filterElements(line.split(": ")[1].split(" | ")[0].split(" "), "");
    nwGame.tickets = utils.filterElements(line.split(": ")[1].split(" | ")[1].split(" "), "");


    games.push(nwGame);
}





