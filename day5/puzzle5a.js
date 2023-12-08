import * as utils from '../utils/utils.js';
let dayNr = 5;
//command one out
utils.readFile("/Users/kwi05/adventOfCode/aoc_2023/day"+dayNr+"/input.txt", readInput);
//utils.readFile("/Users/kwi05/adventOfCode/aoc_2023/day"+dayNr+"/practise.txt", readInput);


// ============================ CLASSES ============================
class ElfMap{
    pipes = [];
    nextMap;

    constructor(name) {
        this.name = name;
    }

    transformInput(input){
        //translate
        let resultAfterTransform = input;
        for (let i = 0; i < this.pipes.length; i++) {
            if(this.pipes[i].isInRange(input)){
                resultAfterTransform = this.pipes[i].transformInput(input);
                break;
            }
        }

        if(this.nextMap){
            return this.nextMap.transformInput(resultAfterTransform);
        }else{
            return resultAfterTransform;
        }
    }
}

class Pipe{
    sourceStart;
    destinationStart;

    range;


    transformInput(input){
        let delta = this.sourceStart-this.destinationStart;
        return input-delta;
    }

    isInRange(input){
        return (input >= this.sourceStart && input < this.sourceStart+this.range);
    }
}


// ============================== CODE ===================================

//variables
let firstMap;

let seeds = [];
let lineNr = 0;

let currentMap;

function readInput(data){
    //create data model
    utils.readLines(data, readLine);


    let seedsAfterTransforming = [];
    for (let i = 0; i < seeds.length; i++) {
        seedsAfterTransforming.push(Number(firstMap.transformInput(seeds[i])));
        //seedsAfterTransforming.push(firstMap.transformInput(50));
    }

    console.log(seedsAfterTransforming);

    console.log(utils.findLowest(seedsAfterTransforming));
}

function readLine(line){
    lineNr++;
    if(lineNr === 1){
        seeds = line.split(": ")[1].split(" ");
        return;
    }

    if(line.length <= 0) return;

    if(utils.isString(line[0])){
        //create new elfMap
        let nwMap = new ElfMap(line);
        if(!firstMap){ //first map
            firstMap = nwMap;
            currentMap = nwMap;
            return;
        }
        //there is already prev map
        currentMap.nextMap = nwMap;
        currentMap = nwMap;

        return;
    }


    //add pipes to latest ElfMap
    let nwPipe = new Pipe();
    let dataArr = line.split(" ");
    nwPipe.destinationStart = Number(dataArr[0]);
    nwPipe.sourceStart = Number(dataArr[1]);
    nwPipe.range = Number(dataArr[2]);
    currentMap.pipes.push(nwPipe); //add the latest
}


