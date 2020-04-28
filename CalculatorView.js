"use strict";

function CalculatorView() {

    var calcDisplay = document.getElementById("display"),
        button0 = document.getElementById("button0"),
        button1 = document.getElementById("button1"),
        button2 = document.getElementById("button2"),
        button3 = document.getElementById("button3"),
        button4 = document.getElementById("button4"),
        button5 = document.getElementById("button5"),
        button6 = document.getElementById("button6"),
        button7 = document.getElementById("button7"),
        button8 = document.getElementById("button8"),
        button9 = document.getElementById("button9"),
        equalsButton = document.getElementById("equalsButton"),
        clearButton = document.getElementById("clearButton"),
        displayValue = "0";



    this.resetDisplayValue = function () {
        displayValue = "0";
    };

    this.getDisplayValue = function () {
        return displayValue;
    }

    this.showChanges = function (buttonNumber) {
        var homeCurrencyIndex = document.getElementById("homeCurrency").selectedIndex;
        var currentCurrency = document.getElementById("homeCurrency")[homeCurrencyIndex].className;
        if (buttonNumber === 10) {
            displayValue = "0";
            calcDisplay.innerHTML = String(displayValue) + " " + currentCurrency;
        } else {
            if(parseInt(displayValue) + buttonNumber < 1000000000) {
                if(displayValue === "0") {
                    displayValue = String(buttonNumber);
                } else {
                    displayValue += String(buttonNumber);
                }
            }
            calcDisplay.innerHTML = String(displayValue) + " " + currentCurrency;
        }
    };

    this.updateDisplay = function (value) {
        console.log(value);
        var foreignCurrencyIndex = document.getElementById("foreignCurrency").selectedIndex;
        var convertedCurrency = document.getElementById("foreignCurrency")[foreignCurrencyIndex].className;
        calcDisplay.innerText = String(value) + " " + convertedCurrency;
    };

    this.setEqualsButton = function (callback) {
        equalsButton.addEventListener("click", callback);
    };
    this.setClearButton = function (callback) {
        clearButton.addEventListener("click", callback);
    };
    this.setbutton0 = function (callback) {
        button0.addEventListener("click", callback);
    };
    this.setbutton1 = function (callback) {
        button1.addEventListener("click", callback);
    };
    this.setbutton2 = function (callback) {
        button2.addEventListener("click", callback);
    };
    this.setbutton3 = function (callback) {
        button3.addEventListener("click", callback);
    };
    this.setbutton4 = function (callback) {
        button4.addEventListener("click", callback);
    };
    this.setbutton5 = function (callback) {
        button5.addEventListener("click", callback);
    };
    this.setbutton6 = function (callback) {
        button6.addEventListener("click", callback);
    };
    this.setbutton7 = function (callback) {
        button7.addEventListener("click", callback);
    };
    this.setbutton8 = function (callback) {
        button8.addEventListener("click", callback);
    };
    this.setbutton9 = function (callback) {
        button9.addEventListener("click", callback);
    };


}