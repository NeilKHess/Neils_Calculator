let zeroDisplay = function() {document.getElementById("calcDisplay"); calcDisplay.innerHTML = "0"};
let displayArrayA = function() {calcDisplay.innerHTML = preArrayA.join("")}
let clearPreArrayA = function() {preArrayA.splice(0, preArrayA.length);}
let clearPreArrayB = function() {preArrayB.splice(0, preArrayB.length);}
let clearPreArrayC = function() {preArrayC.splice(0, preArrayC.length);}
let sendAnswerToArrayA = function() {preArrayA.push(...preArrayC);}
let clearOperator = function() {operatorArray.splice(0, operatorArray.length);}; 
let calculationEnd = function() {clearPreArrayA(); sendAnswerToArrayA(); clearPreArrayB(); clearOperator(); displayArrayA();}
let fillDisplay = function() {if  ((preArrayC.length) >= 1)  { calcDisplay.innerHTML = preArrayC.join("") } else if ((operatorArray.length) == 1) { calcDisplay.innerHTML = preArrayB.join("") } else {calcDisplay.innerHTML = preArrayA.join("")}}
let aftCalcFillDisplay = function() {
    clearPreArrayA(); 
    clearPreArrayB(); 
    sendAnswerToArrayA();
    aZeroDecimalCheck(); 
    clearPreArrayC(); 
    calcDisplay.innerHTML = preArrayA.join("");
}
const keyBoard = document.querySelector('.keyboard')
let aZeroDecimalCheck = function() {if (preArrayA[0] == ".") {(preArrayA.unshift(0))}};
let bZeroDecimalCheck = function() {if (preArrayB[0] == ".") {(preArrayB.unshift(0))}};  
let cZeroDecimalCheck = function() {if (preArrayB[0] == ".") {(preArrayB.unshift(0))}};  


const calcButton = document.getElementsByClassName(".calcButton")
const oneButton = document.getElementById("one")
const twoButton = document.getElementById("two")
const threeButton = document.getElementById("three")
const fourButton = document.getElementById("four")
const fiveButton = document.getElementById("five")
const sixButton = document.getElementById("six")
const sevenButton = document.getElementById("seven")
const eightButton = document.getElementById("eight")
const nineButton = document.getElementById("nine")
const zeroButton = document.getElementById("zero")
const equalsButton = document.getElementById("equals")
const decimalButton = document.getElementById("decimal")
const clearButton = document.getElementById("clear")
const addButton = document.getElementById("add")
const subtractButton = document.getElementById("subtract")
const multiplyButton = document.getElementById("multiply")
const divideButton = document.getElementById("divide")

let preArrayA = [];
let preArrayB = [];
let preArrayC = [];
let operatorArray = [];

//Keypress Functions//

let inputOne = function() {if ((operatorArray.length) == 0) {preArrayA.push("1")} else { preArrayB.push("1")}};
let inputTwo = function() {if ((operatorArray.length) == 0) {preArrayA.push("2")} else { preArrayB.push("2")}};
let inputThree = function() {if ((operatorArray.length) == 0) {preArrayA.push("3")} else { preArrayB.push("3")}}
let inputFour = function() {if ((operatorArray.length) == 0) {preArrayA.push("4")} else { preArrayB.push("4")}}
let inputFive =  function() {if ((operatorArray.length) == 0) {preArrayA.push("5")} else{ preArrayB.push("5")}}
let inputSix = function() {if ((operatorArray.length) == 0) {preArrayA.push("6")} else { preArrayB.push("6")}}
let inputSeven = function() {if ((operatorArray.length) == 0) {preArrayA.push("7")} else { preArrayB.push("7")}}
let inputEight = function() {if ((operatorArray.length) == 0) {preArrayA.push("8")} else { preArrayB.push("8")}}
let inputNine = function() {if ((operatorArray.length) == 0) {preArrayA.push("9")} else  { preArrayB.push("9")}}
let inputZero = function() {if ((operatorArray.length) == 0) {preArrayA.push("0")} else  { preArrayB.push("0")}}
let inputAdd = function() {operatorArray.splice(0, 1, "+")}
let inputSubtract = function() {operatorArray.splice(0, 1, "-")}
let inputMultiply = function() {operatorArray.splice(0, 1, "*")}
let inputDivide = function() {operatorArray.splice(0, 1, "/")}
let inputClear = function() {clearOperator(), clearPreArrayA(), clearPreArrayB(), clearPreArrayC(), calcDisplay.innerHTML = "0" }
let inputDecimal = function() {if (((operatorArray.length) == 0) && preArrayA.includes(".") === false) {preArrayA.push(".")} else if (((operatorArray.length) == 1)  &&  preArrayB.includes(".") === false) {preArrayB.push(".")}}
let inputEqual = function() {executeCalculation(); aftCalcFillDisplay();}

//Screen Number buttons//
oneButton.addEventListener("click", () => inputOne())
twoButton.addEventListener("click", () => inputTwo())
threeButton.addEventListener("click", () => inputThree())
fourButton.addEventListener("click", () => inputFour())
fiveButton.addEventListener("click", () => inputFive())
sixButton.addEventListener("click", () => inputSix())
sevenButton.addEventListener("click", () => inputSeven())
eightButton.addEventListener("click", () => inputEight())
nineButton.addEventListener("click", () => inputNine())
zeroButton.addEventListener("click", () => inputZero())
decimalButton.addEventListener("click", () => inputDecimal())

//Hardkeys//
//keyBoard.addEventListener("keydown", (e) => {if (e.KeyCode === 97 || e.KeyCode === 49) {console.log("Keypress 1 detected"); inputOne(); fillDisplay();}}) 


//Operator Buttons//
addButton.addEventListener('click', function() {operatorArray.splice(0, 1, "+")})
subtractButton.addEventListener('click', function() {operatorArray.splice(0, 1, "-")})
multiplyButton.addEventListener('click', function() {operatorArray.splice(0, 1, "*")})
divideButton.addEventListener('click', function() {operatorArray.splice(0, 1, "/")})

oneButton.addEventListener("click", () => {fillDisplay()});
twoButton.addEventListener("click", () => {fillDisplay()});
threeButton.addEventListener("click", () => {fillDisplay()});
fourButton.addEventListener("click", () => {fillDisplay()});
fiveButton.addEventListener("click", () => {fillDisplay()});
sixButton.addEventListener("click", () => {fillDisplay()});
sevenButton.addEventListener("click", () => {fillDisplay()});
eightButton.addEventListener("click", () => {fillDisplay()});
nineButton.addEventListener("click", () => {fillDisplay()});
zeroButton.addEventListener("click", () => {fillDisplay()});
decimalButton.addEventListener("click", () => {fillDisplay()});

equalsButton.addEventListener("click", () => {executeCalculation();});
equalsButton.addEventListener("click", () => {aftCalcFillDisplay()});

clearButton.addEventListener("click", () => {clearOperator(), clearPreArrayA(), clearPreArrayB(), clearPreArrayC(), calcDisplay.innerHTML = "0" });  

let additionAnswer = function() {return ((preArrayC.push((parseFloat(preArrayA.join(""))) + parseFloat(preArrayB.join("")))).toFixed(5)); aftCalcFillDisplay()}
let subtractionAnswer = function() {return ((preArrayC.push((parseFloat(preArrayA.join(""))) - parseFloat(preArrayB.join("")))).toFixed(5)); aftCalcFillDisplay()}
let multiplicationAnswer = function() {return ((preArrayC.push((parseFloat(preArrayA.join(""))) * parseFloat(preArrayB.join("")))).toFixed(5)); aftCalcFillDisplay()}
let divisionAnswer = function() {return ((preArrayC.push((parseFloat(preArrayA.join(""))) / parseFloat(preArrayB.join("")))).toFixed(5)); aftCalcFillDisplay()}

let executeCalculation = function() {
        {if (operatorArray[0] == "/" && preArrayB == 0) {alert("No dividing by zero!  Try again!")} 
        else if (((preArrayA.length) == 0) || ((preArrayB.length) == 0)) {void(0)}
        else if (operatorArray[0] === "+" && ((preArrayA.length) >= 1) && ((preArrayB.length) >= 1)) {additionAnswer();}
        else if (operatorArray[0] === "-" && ((preArrayA.length) >= 1) && ((preArrayB.length) >= 1)) {subtractionAnswer();}
        else if (operatorArray[0] === "*" && ((preArrayA.length) >= 1) && ((preArrayB.length) >= 1)) {multiplicationAnswer();}
        else if (operatorArray[0] === "/" && ((preArrayA.length) >= 1) && ((preArrayB.length) >= 1)) {divisionAnswer();}
    }}

//Enable backspace button
//enable keyboard support
