import fs from "fs";


export function readFile(filePath, callbackData){
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        callbackData(data);
        //data.split("\n").forEach(callbackLine);
    });
    return "";
}


export function readLines(data, callbackLine){
    data.split("\n").forEach(callbackLine);

}


export function insertIntoString(original, insertString, index){
    return original.slice(0, index) + insertString + original.slice(index);
}

export function generate2DArray(col, row){
    let result = [];
    for (let i = 0; i < row; i++) {
        result[i] = [];
        for (let j = 0; j < col; j++) {
            result[i][j] = 0;
        }
    }
    return result;
}

export function isSingleDigit(value){
    return (value >= '0' && value <= '9');
}

export function filterElements(list, filter){
    let result = [];
    for (let i = 0; i < list.length; i++) {
        if(list[i] !== filter){
            result.push(list[i]);
        }
    }
    return result;
}



export function isString(input){
    return input.match(/[a-z]/i);
}


export function findLowest(arr){
    return Math.min(...arr);
}