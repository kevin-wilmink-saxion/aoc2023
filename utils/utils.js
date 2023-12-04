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

export function readLine(data, callbackLine){
    data.split("\n").forEach(callbackLine);
}


export function insertIntoString(original, insertString, index){
    return original.slice(0, index) + insertString + original.slice(index);
}