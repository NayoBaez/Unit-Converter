let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

const meterToFeet = 3.281;
const feetToMeter = 0.304;
const literToGallon = 0.264;
const gallonToLiter = 3.785411784;
const kiloToPound = 2.204;
const poundToKilo = 0.45359237;

function placeHolder() {
  inputEl.value = 10;
  let convertValue = inputEl.value;

  lengthEl.textContent = `${convertValue} meters = ${(
    convertValue * meterToFeet
  ).toFixed(2)} feet | ${convertValue} feet = ${(
    convertValue * feetToMeter
  ).toFixed(2)} meters`;

  volumeEl.textContent = `${convertValue} liters = ${(
    convertValue * literToGallon
  ).toFixed(2)} gallons | ${convertValue} gallons = ${(
    convertValue * gallonToLiter
  ).toFixed(2)} liters`;

  massEl.textContent = `${convertValue} kilograms = ${(
    convertValue * kiloToPound
  ).toFixed(2)} pounds | ${convertValue} pounds = ${(
    convertValue * poundToKilo
  ).toFixed(2)} kilograms`;
}

placeHolder();

convertBtn.addEventListener("click", function () {
  let convertValue = inputEl.value;

  lengthEl.textContent = `${convertValue} meters = ${(
    convertValue * meterToFeet
  ).toFixed(2)} feet | ${convertValue} feet = ${(
    convertValue * feetToMeter
  ).toFixed(2)} meters`;

  volumeEl.textContent = `${convertValue} liters = ${(
    convertValue * literToGallon
  ).toFixed(2)} gallons | ${convertValue} gallons = ${(
    convertValue * gallonToLiter
  ).toFixed(2)} liters`;

  massEl.textContent = `${convertValue} kilograms = ${(
    convertValue * kiloToPound
  ).toFixed(2)} pounds | ${convertValue} pounds = ${(
    convertValue * poundToKilo
  ).toFixed(2)} kilograms`;
});
