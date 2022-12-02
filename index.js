let employeesData = new Array();
let fileTxt = new XMLHttpRequest();
let fileRoute = 'index.txt';

fileTxt.open("GET", fileRoute, false);
fileTxt.send(null);
let txt = fileTxt.responseText;

employeesData = txt.split('\r\n');
console.log(employeesData);