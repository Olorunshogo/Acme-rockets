// Get, update and display the current year
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

currentYearElement = document.getElementById("currentYear");
currentYearElement.textContent = currentYear;