import * as fs from 'fs';

export const getDataFromFile = ()=>{
    const filePath = './dataset/data.txt';
    const dataFromFile = fs.readFileSync(filePath, 'utf-8');

    return dataFromFile;
};