let screenValues = [];
let operatorXTimesClicked = 0;
let firstOperator = null;
let secondOperator = null;
let counter = 0;
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
    operatorXTimesClicked = 0;
    
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
            operate(parseFloat(screenValues[0]),"x",parseFloat(screenValues[1]));
            
        }else if (calcScreen.textContent.toString()[i] == "÷") {
            screenValues = (calcScreen.textContent).split("÷");
            console.log(parseFloat(screenValues[1]));
            operate(parseFloat(screenValues[0]),"÷",parseFloat(screenValues[1]));
        }
    }
}

function numberToScreen(e){
    let eText = e.target.textContent;
    if(calcScreen.textContent[0] == "0"){
        calcScreen.textContent = "";
    }
    calcScreen.textContent += eText;
}

function storeValuesInArray(e){
    operatorXTimesClicked +=1;

    if(operatorXTimesClicked<2){
        for (let i = 0; i < calcScreen.textContent.length; i++) {
            if(calcScreen.textContent[i] == "+"){
                firstOperator = calcScreen.textContent[i];

            }else if(calcScreen.textContent[i] == "-"){
                firstOperator = calcScreen.textContent[i];

            }else if(calcScreen.textContent[i] == "x"){
                console.log("multiplication");
                firstOperator = calcScreen.textContent[i];

            }else if(calcScreen.textContent[i] == "÷"){
                console.log("division");
                firstOperator = calcScreen.textContent[i];
            }
        }
        screenValues += (calcScreen.textContent).split(firstOperator);
        console.log(`operator1 = ${firstOperator}. operator2 = ${secondOperator}`);
        console.log(`screenvalues when operator was clicked 1 time ${screenValues}`);
    }else if (operatorXTimesClicked == 2){
        for (let i = 0; i < calcScreen.textContent.length; i++) {
            if(calcScreen.textContent[i] == "+"){
                secondOperator = calcScreen.textContent[i];

            }else if(calcScreen.textContent[i] == "-"){
                secondOperator = calcScreen.textContent[i];

            }else if(calcScreen.textContent[i] == "x"){
                console.log("multiplication");
                secondOperator = calcScreen.textContent[i];

            }else if(calcScreen.textContent[i] == "÷"){
                console.log("division");
                secondOperator = calcScreen.textContent[i];
            }
        }
        console.log(`operator1 = ${firstOperator} operator2 = ${secondOperator}`);
        
        screenValues = (calcScreen.textContent).split(firstOperator);
        operatorXTimesClicked = 0;
        operate(parseFloat(screenValues[0]), firstOperator, parseFloat(screenValues[1]));
        console.log(screenValues);
        console.log(`screenvalues when operator was clicked 2 times${screenValues}`);
        firstOperator = secondOperator;
        secondOperator = null;
        screenValues = (calcScreen.textContent).split(firstOperator);
        calcScreen.textContent += `${firstOperator}`;
        operatorXTimesClicked +=1;
    }
    console.log(`screenvalues at the end ${screenValues}`);
}

function operate(n1,operator,n2) {
    if(operator == "÷"){
        calcScreen.textContent = divition(n1,n2);
    }else if(operator == "x"){
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