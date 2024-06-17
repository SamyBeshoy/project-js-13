// Html Title

document.title = "project-js-13";

// Get Elements From Html

let dateInput = document.getElementById("dateInput") as HTMLInputElement;
let calcBtn = document.getElementById("calcBtn") as HTMLBodyElement;
let span: any = document.getElementById("ageIsX") as HTMLSpanElement;

// initialize variables

let dateOfBrith: any;
let yearOfBrith: any;
let currentYear: number = new Date().getFullYear();
let age: number | string;

calcBtn.onclick = function () {
    dateOfBrith = dateInput.value;
    yearOfBrith = dateOfBrith.split("-")[0]; 
    age = currentYear - Number(yearOfBrith);
    if (yearOfBrith && !isNaN(Number(yearOfBrith))) {
        span.innerHTML = ` ${age} `;
    } else {
        span.innerHTML = "UnKnown";
    }
}