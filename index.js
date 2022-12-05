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
/********************************************************************* */

let pairEmployees = {};

for (let i = 0; i < scheduleDaysHours.length; i++) {
    let employee = scheduleDaysHours[i];

    for (let j = 0; j < scheduleDaysHours.length; j++) {
        let employeeTwo = scheduleDaysHours[j];
        let coincidence = 0;
        for (let k = 0; k < employee.scheduleDays.length; k++) {
            let day = employee.scheduleDays[k];
            let entryHour = employee.entryHours[k];
            let exitHour = employee.exitHours[k];
            if(employeeTwo.scheduleDays.includes(day) && employeeTwo.entryHours.includes(entryHour) && employeeTwo.exitHours.includes(exitHour)){
                coincidence++;
            }
        }
        pairEmployees[`${employee.employeeName}-${employeeTwo.employeeName}`] = coincidence;
    }
    
}


console.log(pairEmployees);
