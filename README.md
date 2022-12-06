
# ioet Exercise
Hi, I'm Alex and this is my solution for the following exercise to apply at ioet as an intern or a software developer jr. I had a great time putting my effort to finish it in the best way possible as I find it challenging
to see where I am now in my Javascript knowledge :).

## Index
- [Description of the problem](#Description-of-the-problem)
- [Authors](#Authors)
- [Installation](#Installation)
- [Running Code](#Running-code)
- [Running tests](#Running-tests)

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

## Authors

- [@alex-moreano](https://www.github.com/alex-moreano)


## Installation
1. Clone it from my repository.

```bash
git clone https://github.com/alex-moreano/ioet-exercise.git
```
2. Once you already cloned it, you have to install the dependencies.
   First you will open ioet-exercise folder, and then use the CLI of your preference in this folder.
   Then you have to type there:
```bash
  npm i
```
3. After that now you can open the tests as I'm using jest for testing purposes. And babel to use import/export modules.
## Running code

In the same folder of ioet-exercise, open the CLI and type:
```bash
node main.js
```

Then you will have the results from the data that feeds the script.
## Running tests

To run tests, run the following command

```bash
  npm run test
```

