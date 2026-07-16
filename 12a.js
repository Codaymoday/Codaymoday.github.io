const aField = document.querySelector("#aField");
const bField = document.querySelector("#bField");
const cField = document.querySelector("#cField");
const dField = document.querySelector("#dField");
const eField = document.querySelector("#eField");
const fField = document.querySelector("#fField");
const gField = document.querySelector("#gField");
const hField = document.querySelector("#hField");
const ifield = document.querySelector("#iField");
const jField = document.querySelector("#jField");
const length = document.querySelector("#length");
const width = document.querySelector("#width");
const base = document.querySelector("#base");
const height = document.querySelector("#height");
const min = document.querySelector("#min");
const max = document.querySelector("#max");
const sumBox = document.querySelector("#sum-box");
const sumButton = document.querySelector("#sum");
const differenceBox = document.querySelector("#difference-box");
const differenceButton = document.querySelector("#difference");
const multiplicationBox = document.querySelector("#multiplication-box");
const multiplicationButton = document.querySelector("#multiplication");
const divisionBox = document.querySelector("#division-box");
const divisionButton = document.querySelector("#division");
const percentageBox = document.querySelector("#percentage-box");
const percentageButton = document.querySelector("#percentage");
const rectangleBox = document.querySelector("#rectangle-box");
const rectangleButton = document.querySelector("#rectangle");
const triangleBox = document.querySelector("#triangle-box");
const triangleButton = document.querySelector("#triangle");
const randomBox = document.querySelector("#random-box");
const randomButton = document.querySelector("#random");
sumButton.addEventListener("click", doSum);
differenceButton.addEventListener("click", doDifference);
multiplicationButton.addEventListener("click", doMultiplication);
divisionButton.addEventListener("click", doDivision);
percentageButton.addEventListener("click", doPercentage);
rectangleButton.addEventListener("click", doRectangle);
triangleButton.addEventListener("click", doTriangle);
randomButton.addEventListener("click", doRandom);
function doSum() {
//.value is property to get data from input element
//parseInt to convert into number
let a = parseInt(aField.value);
let b = parseInt(bField.value);
let sum = a+b;
sumBox.innerHTML = "Sum of "+a+" and "+b+" is " + sum +".";
}
function doDifference() {
let a = parseInt(cField.value);
let b = parseInt(dField.value);
let difference = a-b;
differenceBox.innerHTML = "Subtracting "+b+" from "+a+" gives " + difference +".";
}
function doMultiplication() {
let a = parseInt(eField.value);
let b = parseInt(fField.value);
let multiplication = a*b;
multiplicationBox.innerHTML = "Multiplying "+a+" and "+b+" gives " + multiplication +".";
}
function doDivision() {
let a = parseInt(gField.value);
let b = parseInt(hField.value);
let division = a/b;
divisionBox.innerHTML = "Dividing "+a+" by "+b+" gives " + division +".";
}
function doPercentage() {
let a = parseInt(iField.value);
let b = parseInt(jField.value);
let percentage = a%b;
percentageBox.innerHTML = a+"% of "+b+" is " + percentage +".";
}
function doRectangle() {
let a = parseInt(length.value);
let b = parseInt(width.value);
let rectangle = a*b;
rectangleBox.innerHTML = "the area of a rectangle with a length of "+a+" and a width of "+b+" is " + rectangle +".";
}
function doTriangle() {
let a = parseInt(base.value);
let b = parseInt(height.value);
let triangle = 1/2*a*b;
triangleBox.innerHTML = "the area of a triangle with a base of "+a+" and a height of "+b+" is " + triangle +".";
}
function doRandom() {
let a = parseInt(min.value);
let b = parseInt(max.value);
let random = Math.random()*a+b;
randomBox.innerHTML = "a random number between "+a+" and "+b+" is " + random +".";
}