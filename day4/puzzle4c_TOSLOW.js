import * as utils from '../utils/utils.js';
let dayNr = 4;
//command one out
//utils.readFile("/Users/kwi05/adventOfCode/aoc_2023/day"+dayNr+"/input.txt", readInput);
utils.readFile("/Users/kwi05/adventOfCode/aoc_2023/day"+dayNr+"/practise.txt", readInput);


//I think the algorithm works, but it goes in breadth first, making it too slow..

// ============================ CLASSES ============================
class Game{
    constructor(gameNr) {
        this.gameNr = Number(gameNr);
    }

    winning = [];
    tickets = [];

    totalWins = 0;


}


// ============================== CODE ===================================

//variables
let games = [];


function getWinningNumbers(tickets, winning){
    let result = [];
    for (let i = 0; i < tickets.length; i++) {
        let currentTicket = tickets[i];
        if(winning.includes(currentTicket)){
            result.push(currentTicket);
        }
    }
    return result;
}

function readInput(data){
    //create data model
    utils.readLines(data, readLine);


    for (let i = 0; i < games.length; i++) {
        let currentGame = games[i];
        //let wins = currentGame.getWinningNumbers().length;
        let wins = currentGame.totalWins;//getWinningNumbers(currentGame.tickets, currentGame.winning).length;
        for (let j = currentGame.gameNr+1; j <= currentGame.gameNr+wins ; j++) {
            let gameCopy = structuredClone(games[j-1]);
            games.push(gameCopy);
        }

        console.log(games.length);
    }

    console.log(games.length);
}

function readLine(line){

    let nwGame = new Game(line.split(": ")[0].split(" ")[1]);
    nwGame.winning = utils.filterElements(line.split(": ")[1].split(" | ")[0].split(" "), "");
    nwGame.tickets = utils.filterElements(line.split(": ")[1].split(" | ")[1].split(" "), "");

    nwGame.totalWins = getWinningNumbers(nwGame.tickets, nwGame.winning).length;

    games.push(nwGame);
}





