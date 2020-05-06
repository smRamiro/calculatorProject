let screenValues = [];
const calcScreen = document.querySelector("#calculatorScreen");
const calcButtons = document.querySelectorAll(".calcButton");
const calcOperators = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");

equalsButton.addEventListener("click", result)

for (let i = 0; i < calcButtons.length; i++){
    calcButtons[i].addEventListener("click", numberToScreen);
}

for (let i = 0; i < calcOperators.length; i++) {
    calcOperators[i]. addEventListener("click", storeValuesInArray);
}

//checks what operator was chosen/written in order to do the correct operation.
function result(){
    for (let i = 0; i < (calcScreen.textContent).toString().length; i++) {

        if (calcScreen.textContent.toString()[i] == "+"){
            screenValues = (calcScreen.textContent).split("+");
            console.log(parseFloat(screenValues[1]));
            operate(parseFloat(screenValues[0]),"+",parseFloat(screenValues[1]));

        }else if (calcScreen.textContent.toString()[i] == "-"){
            screenValues = (calcScreen.textContent).split("-");
            console.log(parseFloat(screenValues[1]));
            operate(parseFloat(screenValues[0]),"-",parseFloat(screenValues[1]));

        }else if (calcScreen.textContent.toString()[i] == "x") {
            screenValues = (calcScreen.textContent).split("x");
            console.log(parseFloat(screenValues[1]));
            operate(parseFloat(screenValues[0]),"*",parseFloat(screenValues[1]));
            
        }else if (calcScreen.textContent.toString()[i] == "÷") {
            screenValues = (calcScreen.textContent).split("÷");
            console.log(parseFloat(screenValues[1]));
            operate(parseFloat(screenValues[0]),"/",parseFloat(screenValues[1]));
        }
    }
}

function numberToScreen(e){
    if(calcScreen.textContent[0] == "0"){
        calcScreen.textContent = "";
    }

    calcScreen.textContent += e.target.textContent;
}

function storeValuesInArray(e){
    screenValues = (calcScreen.textContent).split("+");
}

function operate(n1,operator,n2) {
    if(operator == "/"){
        calcScreen.textContent = divition(n1,n2);
    }else if(operator == "*"){
        calcScreen.textContent = multiplication(n1,n2);
    }else if(operator == "-"){
        calcScreen.textContent = substraction(n1,n2);
    }else if(operator == "+"){
        calcScreen.textContent = addition(n1,n2);
    }
}

function addition(n1,n2) {
    let result = n1+n2;
    return result;
}

function substraction(n1,n2) {
    let result = n1-n2;
    return result;
}

function multiplication(n1,n2) {
    let result = n1*n2;
    return result;
}

function divition(n1,n2) {
    let result = n1/n2;
    return result;
}