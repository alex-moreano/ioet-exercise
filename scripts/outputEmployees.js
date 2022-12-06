import { employeesData } from "./getDataEmployees.js";

let pairEmployees = {};

const checkInRange = (start, end, hourToCheck)=>{
    return hourToCheck >= start && hourToCheck <= end;
};

for (let i = 0; i < employeesData.length; i++) {
    let employee = employeesData[i];

    for (let j = i+1; j < employeesData.length; j++) {
        let employeeTwo = employeesData[j];
        let coincidence = 0;
        for (let k = 0; k < employee.scheduleDays.length; k++) {
            let matchDay = employeeTwo.scheduleDays.includes(employee.scheduleDays[k]);
            if(matchDay){
                let matchHours = employeeTwo.entryHours.includes(employee.entryHours[k]) && employeeTwo.exitHours.includes(employee.exitHours[k]);
                let matchRange = checkInRange(employeeTwo.entryHours, employeeTwo.exitHours, employee.entryHours[k]) 
                                || checkInRange(employee.entryHours[k], employee.exitHours[k], employeeTwo.entryHours)
                                || checkInRange(employee.entryHours[k], employee.exitHours[k], employeeTwo.entryHours)
                                || checkInRange(employee.entryHours[k], employee.exitHours[k], employeeTwo.entryHours);
                if(matchHours){
                    coincidence++;
                }else if(matchRange){
                    coincidence ++;
                }
            }
        }
        pairEmployees[`${employee.employeeName}-${employeeTwo.employeeName}`] = coincidence;
    }
}

export {pairEmployees};