"use strict";
document.title = "project-js-13";
let dateInput = document.getElementById("dateInput");
let calcBtn = document.getElementById("calcBtn");
let span = document.getElementById("ageIsX");
let dateOfBrith;
let yearOfBrith;
let currentYear = new Date().getFullYear();
let age;
calcBtn.onclick = function () {
    dateOfBrith = dateInput.value;
    yearOfBrith = dateOfBrith.split("-")[0];
    age = currentYear - Number(yearOfBrith);
    if (yearOfBrith && !isNaN(Number(yearOfBrith))) {
        span.innerHTML = ` ${age} `;
    }
    else {
        span.innerHTML = "UnKnown";
    }
};
