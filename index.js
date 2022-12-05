/************************************************* */
const fs = require('fs');
const filePath = './data.txt';
const dataFromFile = fs.readFileSync(filePath, 'utf-8');
/*************************************************** */

/*************************************************** */

const dataEmployees = dataFromFile.split('\r\n');

const employeeSchedule = dataEmployees.map((dataEmployee)=>{
    const [employeeName, employeeSchedule] = dataEmployee.split('=');
    return {employeeName, employeeSchedule};
});

const scheduleDaysHours = employeeSchedule.map((dataEmployee)=>{
    const {employeeName, employeeSchedule} = dataEmployee;
    const scheduleDays = employeeSchedule.split(',').map((day)=>day.substring(0,2));
    const entryHours = employeeSchedule.split(',').map((hour)=>hour.substring(2,7));
    const exitHours = employeeSchedule.split(',').map((hour)=>hour.substring(8,14));
    return {employeeName, scheduleDays, entryHours, exitHours};
});



console.log(scheduleDaysHours);
