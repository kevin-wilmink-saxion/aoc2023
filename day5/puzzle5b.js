import * as utils from '../utils/utils.js';
let dayNr = 5;
//command one out//
utils.readFile("/Users/kwi05/adventOfCode/aoc_2023/day"+dayNr+"/input.txt", readInput);
//utils.readFile("/Users/kwi05/adventOfCode/aoc_2023/day"+dayNr+"/practise.txt", readInput);

//NOTE: its a bit slow, but it does the job :P

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
let seedsPuzzleB = [];
let lineNr = 0;

let currentMap;

//let storedResults = new Map();

function readInput(data){
    //create data model
    utils.readLines(data, readLine);


    let lowest = 9999999999999999;
    for (let i = 0; i < seeds.length; i+=2) {
        console.log(seeds[i] + " started");
        let start = Number(seeds[i]);
        let range = Number(seeds[i+1]);
        let end = start+range;
        for (let j = start; j < end; j++) {
            //seedsPuzzleB.push(Number(j));
            let result = (Number(firstMap.transformInput(Number(j))));

            /*
            let result;

            if(storedResults.has(j)){
                result = storedResults.get(j);
            }else{
                result = (Number(firstMap.transformInput(Number(j))));
                storedResults.set(j, result);
            }*/

            if(result < lowest){
                lowest = result;
            }
        }
    }

/*
    let seedsAfterTransforming = [];
    for (let i = 0; i < seedsPuzzleB.length; i++) {
        seedsAfterTransforming.push(Number(firstMap.transformInput(seedsPuzzleB[i])));
        //seedsAfterTransforming.push(firstMap.transformInput(50));
    }*/

    //console.log(seedsAfterTransforming);

    //console.log(utils.findLowest(seedsAfterTransforming));
    console.log(lowest);
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


