
# ioet Exercise
Hi, I'm Alex and this is my solution for the following exercise to apply at ioet as an intern or a software developer jr. I had a great time putting my effort to finish it in the best way possible as I find it challenging
to see where I am now in my Javascript knowledge :).

## Index
- [Authors](#Authors)
- [Installation](#Installation)
- [How to run the code?](#How-to-run-the-code?)
- [How to run the tests?](#How-to-run-the-tests?)
- [Description of the problem](#Description-of-the-problem)
- [My approaching to solve the problem](#My-approaching-to-solve-the-problem)
- [Stack](#Stack)
- [Coding](#Coding)

## Authors

- [@alex-moreano](https://www.github.com/alex-moreano)


## Installation
1. Clone it from my repository.

```bash
git clone https://github.com/alex-moreano/ioet-exercise.git
```
   Or if you want you can click <b>Code</b> and then you will have the following options as you can see in the image. You can click in <b>Dowload as ZIP</b>. Then you can unzip it and start.
   
   <img src="https://i.ibb.co/2YKKsFZ/image-2022-12-06-131903167.png"/>
   
2. Once you already have the project, you have to install the dependencies.
      > Note: for this purpose you must have Node.js v16.18.0.
      
   Then you can open ioet-exercise folder with the CLI of your preference.
   Once you got your command line open, you have to type there:
   
```bash
  npm i
```
3. After that now you can open the tests.
>I'm using jest for testing purposes. And babel to use import/export modules.

## How to run the code?

In the same folder of ioet-exercise, open the CLI and type:

```bash
node main.js
```
<img src="https://i.ibb.co/Mcq7Y1Q/cli.png" alt="cli" border="0">

Then you will have the results from the data that feeds the script.

<img src="https://i.ibb.co/wy2BB5k/results.png" alt="results" border="0">

## How to run tests

To run tests, run the following command in your CLI:

```bash
  npm run test
```

Then you will see the tests running like this:

<img src="https://i.ibb.co/9GjBrLp/tests.png" alt="tests" border="0">

>Please note: If you run the tests the data from the data folder will be erased. I made a test that erases the data to see if throws an error when it's empty.
If you want to run the code from the main.js again fill the data from the databackup folder. Inside that folder you will find a data.txt file, copy that file inside
the data folder if you ran the tests and you want to run the code.
<img src="https://i.ibb.co/c30Lxkq/backup.png" alt="backup" border="0">

## Description of the problem
The company ACME offers their employees the flexibility to work the hours they want. But due to some external circumstances they need to know what employees have been at the office within the same time frame

The goal of this exercise is to output a table containing pairs of employees and how often they have coincided in the office.

Input: the name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our examples below:

Example 1:

INPUT
RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00


OUTPUT:
ASTRID-RENE: 2
ASTRID-ANDRES: 3
RENE-ANDRES: 2

Example 2:

INPUT:
RENE=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

OUTPUT:
RENE-ASTRID: 3

## My approaching to solve the problem

To solve this exercise I first make myself questions about the problems I've found. Then I had this diagram:

<img src="https://i.ibb.co/bHxfFBq/Diagrama-en-blanco.png" alt="Diagrama-en-blanco" border="0">

After that I made the flowchart for each problem.

To read the .txt file:

<img src="https://i.ibb.co/K9rfF7Q/Diagrama-en-blanco-1.png" alt="Diagrama-en-blanco-1" border="0">

To structure the data:

<img src="https://i.ibb.co/QFRzbr9/Diagrama-en-blanco.jpg" alt="Diagrama-en-blanco" border="0">

To get the pairs of employees:

<img src="https://i.ibb.co/Xk4RRmn/Diagrama-en-blanco-1.jpg" alt="Diagrama-en-blanco-1" border="0">

After making this flowcharts I started to code them. To solve it I used javascript language as I wanted to work with modules. Each of the three problems I found is a module so I wanted to have the code separated. Each module does what is meant to be.

## Stack

As I said I worked in this exercise with javascript. To debug the code I used node.js and for the testing jest. I used babel also to use the import/export functions in testing and in the scripts.

## Coding

To read the file I created getDataFromFile.js module. This reads the .txt file, in this case the /data.txt file from the /data folder and returns the whole string as it is read.

```js
import * as fs from 'fs';

export const getDataFromFile = ()=>{
    const filePath = './dataset/data.txt';
    const dataFromFile = fs.readFileSync(filePath, 'utf-8');
    if(dataFromFile.length===0){
        return 'Error: File data is empty!';
    }else{
        return dataFromFile;
    }
};
```

Then i had to structure that data. For that purpose i made the following object as an example of what I wanted:

```js
{
   employeeName: 'ALEX',
   employeeDay: 'MO',
   entryHour: '17:00',
   exitHour: '19:00',
}
```

With that structure I started to coding the getDataEmployees.js to get an array of objects with the structure I prepared.
First of all I created an array splitting the data I got from the file from each line:

```js
import { getDataFromFile } from "./getDataFromFile.js";

const dataEmployees = getDataFromFile().split('\n');
``` 

Then I splitted again the array to get a pair of employee and the schedule. As you can see, the callback function takes a dataEmployee element and uses destructuring assignment to extract the employeeName and employeeSchedule values from the element. The function then returns an object with the employeeName and employeeSchedule properties. This results in a new array of objects, with each object containing the name and schedule of an employee.

```js
const employeeSchedule = dataEmployees.map((dataEmployee)=>{
    const [employeeName, employeeSchedule] = dataEmployee.split('=');
    return {employeeName, employeeSchedule};
});
```
Finally, the follwing function takes a dataEmployee element and uses destructuring assignment again to extract the employeeName and employeeSchedule properties from the object. The function then splits the employeeSchedule string into an array of strings, each representing a day and its corresponding entry and exit hours to get the object as I structured.

```js
export const employeesData = employeeSchedule.map((dataEmployee)=>{
    const {employeeName, employeeSchedule} = dataEmployee;
    const scheduleDays = employeeSchedule.split(',').map((day)=>day.substring(0,2));
    const entryHours = employeeSchedule.split(',').map((hour)=>hour.substring(2,7));
    const exitHours = employeeSchedule.split(',').map((hour)=>hour.substring(8,14));
    return {employeeName, scheduleDays, entryHours, exitHours};
});
```

Finally I had to code In order to solve the root problem. In order to do that I created the outputEmployees.js module to get the pair of coincidences between the employees.

First I imported employeesData array of objects from the data structure. And then i initialized the object of pairs that I'm going to use to show the results as It's asked.

```js
import { employeesData } from "./getDataEmployees.js";

let pairEmployees = {};
```

As I have to check if an hour is between two hours to know the coincidence of schedules. I created this function to send If the hour is between the range.

```js
const checkInRange = (start, end, hourToCheck)=>{
    return hourToCheck >= start && hourToCheck <= end;
};
```
```
