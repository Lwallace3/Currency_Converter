"use strict"
/*globals CalculatorView, CalculatorModel*/

var calculatorView = new CalculatorView(),
    calculatorModel = new CalculatorModel(),
    calculatorController = null;

function CalculatorController() {

    this.updateDisplay = function (num) {
        if (num === 11) {
            calculatorView.updateDisplay(calculatorModel.calculateCurrency(calculatorView.getDisplayValue()));
            calculatorView.resetDisplayValue();
        } else {
            calculatorView.showChanges(num);
            calculatorModel.updateValues();
            calculatorModel.savePreferences();
        }
    };

    this.init = function () {
        calculatorModel.loadRatesFile();
        calculatorModel.loadFromLocalStorage();

        calculatorView.setEqualsButton(function () {
            calculatorController.updateDisplay(11);
        });
        calculatorView.setClearButton(function () {
            calculatorController.updateDisplay(10);
        });
        calculatorView.setbutton0(function () {
            calculatorController.updateDisplay(0);
        });
        calculatorView.setbutton1(function () {
            calculatorController.updateDisplay(1);
        });
        calculatorView.setbutton2(function () {
            calculatorController.updateDisplay(2);
        });
        calculatorView.setbutton3(function () {
            calculatorController.updateDisplay(3);
        });
        calculatorView.setbutton4(function () {
            calculatorController.updateDisplay(4);
        });
        calculatorView.setbutton5(function () {
            calculatorController.updateDisplay(5);
        });
        calculatorView.setbutton6(function () {
            calculatorController.updateDisplay(6);
        });
        calculatorView.setbutton7(function () {
            calculatorController.updateDisplay(7);
        });
        calculatorView.setbutton8(function () {
            calculatorController.updateDisplay(8);
        });
        calculatorView.setbutton9(function () {
            calculatorController.updateDisplay(9);
        });
    };

}

calculatorController = new CalculatorController();
window.addEventListener("load", calculatorController.init());
// window.addEventListener("beforeunload",calculatorController.savePreferences());

