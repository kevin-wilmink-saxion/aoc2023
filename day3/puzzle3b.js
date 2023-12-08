import * as utils from '../utils/utils.js';
import {generate2DArray} from "../utils/utils.js";
let dayNr = 3;
//command one out



// ============================ CLASSES ============================
class Tile{
    value = "";

    getWidth(){
        return this.value.length;
    }

    isSymbol(){
        return !utils.isSingleDigit(this.value[0]) && this.value !== ".";
    }

    isNumber(){
        return utils.isSingleDigit(this.value[0]);
    }
}


// ============================== CODE ===================================

//variables


const totalCol = 140; //140
const totalRows = 140; //140
let grid = utils.generate2DArray(totalCol, totalRows);
utils.readFile("/Users/kwi05/adventOfCode/aoc_2023/day"+dayNr+"/input.txt", readInput);
//utils.readFile("/Users/kwi05/adventOfCode/aoc_2023/day"+dayNr+"/practise.txt", readInput);



let currentRow = 0;
function readInput(data){
    //create data model
    utils.readLines(data, readLine);


    let totalScore = 0;
    for (let y = 0; y < totalRows;  y++) {
        for (let x = 0; x < totalCol; x++) {
            //per symbol
            let neighboursChecked = [];

            let currentTile = grid[y][x];
            if(currentTile.value === "*"){
                let gearRatio = 0;
                for (let deltaY = -1; deltaY <= 1; deltaY++) {
                    for (let deltaX = -1; deltaX <= 1; deltaX++) {
                        if(deltaX === 0 && deltaY === 0) continue; //currentTile
                        if(x+deltaX <0 || x+deltaX >= totalCol) continue; //xAxis out of bounds
                        if(y+deltaY <0 || y+deltaY >= totalRows) continue; //yAxis out of bounds
                        let neighbour = grid[y+deltaY][x+deltaX];
                        if(neighbour.isNumber() && !neighboursChecked.includes(neighbour)){
                            neighboursChecked.push(neighbour);
                        }
                    }
                }
                if(neighboursChecked.length === 2){
                    gearRatio = Number(neighboursChecked[0].value) * Number(neighboursChecked[1].value);
                }

                totalScore += gearRatio;
            }



        }
    }

    console.log(totalScore);


}

function readLine(line){

    let currentTile;
    for (let i = 0; i < line.length; i++) {
        let currentChar = line[i];

        if(!currentTile){
            currentTile = new Tile();
        }
        currentTile.value= currentTile.value+""+currentChar;
        grid[currentRow][i] = currentTile;

        if(utils.isSingleDigit(currentChar) &&
            (i + 1 < totalCol && utils.isSingleDigit(line[i + 1]))) {
            //nothing
        }else{
            currentTile = undefined; //start a new one in the next
        }


    }
    //progress possible last number



    currentRow++;
}


