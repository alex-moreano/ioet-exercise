import { getDataFromFile } from "./getDataFromFile.js";


const dataEmployees = getDataFromFile().split('\r\n');
    
const employeeSchedule = dataEmployees.map((dataEmployee)=>{
    const [employeeName, employeeSchedule] = dataEmployee.split('=');
    return {employeeName, employeeSchedule};
});

export const employeesData = employeeSchedule.map((dataEmployee)=>{
    const {employeeName, employeeSchedule} = dataEmployee;
    const scheduleDays = employeeSchedule.split(',').map((day)=>day.substring(0,2));
    const entryHours = employeeSchedule.split(',').map((hour)=>hour.substring(2,7));
    const exitHours = employeeSchedule.split(',').map((hour)=>hour.substring(8,14));
    return {employeeName, scheduleDays, entryHours, exitHours};
});