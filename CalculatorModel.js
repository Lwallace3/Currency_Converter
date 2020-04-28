"use strict";


function CalculatorModel() {
    var foreignCurrency = Number(document.getElementById("foreignCurrency").value);
    var homeCurrency = Number(document.getElementById("homeCurrency").value);
    var bankFee = Number(document.getElementById("bankFee").value);

    this.calculateCurrency = function(displayValue){
        console.log(displayValue);
        return (((displayValue / homeCurrency)*foreignCurrency)*bankFee).toFixed(0);
    };

    this.loadFromLocalStorage = function () {
        if(window.localStorage.getItem('localCurrency') !== null) {
            var localCurrency = Number(window.localStorage.getItem('localCurrency')),
                foreignCurrency = Number(window.localStorage.getItem('foreignCurrency')),
                bankFee = Number(window.localStorage.getItem('bankFee')),
                currencyValues = JSON.parse(localStorage.getItem("currencyValues"));

            document.getElementById("homeCurrency").selectedIndex = localCurrency;
            document.getElementById("foreignCurrency").selectedIndex = foreignCurrency;
            document.getElementById("bankFee").selectedIndex = bankFee;

            var i;
            for(i = 0; i < currencyValues.length; i++) {
                document.getElementsByClassName(currencyValues[i][0])[0].value = currencyValues[i][1];
                document.getElementsByClassName(currencyValues[i][0])[1].value = currencyValues[i][1];
            }
        } else {
            document.getElementById("homeCurrency").selectedIndex = 0;
            document.getElementById("foreignCurrency").selectedIndex = 1;
            document.getElementById("bankFee").selectedIndex = 0;
        }
    };

    this.updateValues = function () {
        foreignCurrency = Number(document.getElementById("foreignCurrency").value);
        homeCurrency = Number(document.getElementById("homeCurrency").value);
        bankFee = Number(document.getElementById("bankFee").value);
    };

    this.savePreferences = function () {
        var currencies = document.getElementById("foreignCurrency");
        var localCurrencyIndex = document.getElementById("homeCurrency").selectedIndex.toString();
        var foreignCurrencyIndex = document.getElementById("foreignCurrency").selectedIndex.toString();
        var bankFeeIndex = document.getElementById("bankFee").selectedIndex.toString();
        window.localStorage.setItem('localCurrency', localCurrencyIndex);
        window.localStorage.setItem('foreignCurrency', foreignCurrencyIndex);
        window.localStorage.setItem('bankFee', bankFeeIndex);

        var i, tempArray = [[]];
        for(i = 0; i < currencies.length; i++) {
            tempArray[i] = [currencies[i].getAttribute("class"),(currencies[i].getAttribute("value"))];
        }
        localStorage.setItem("currencyValues", JSON.stringify(tempArray));
    };

    this.loadRatesFile = function () {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if(this.readyState === 4 && this.status === 200){
                pullRatesData(this);
            }
        };
        xhr.open("POST", "https://devweb2019.cis.strath.ac.uk/~aes02112/ecbxml.php", true);
        xhr.send(null);

        function pullRatesData (xml) {
            var xmlDoc = xml.responseXML;
            var i;

            for(i = 2; i<34; i++) {
                var currentRate = xmlDoc.getElementsByTagName("Cube")[i].getAttribute("rate");
                var currency = xmlDoc.getElementsByTagName("Cube")[i].getAttribute("currency");

                document.getElementsByClassName(String(currency))[0].value = currentRate;
                document.getElementsByClassName(String(currency))[1].value = currentRate;

                document.getElementsByClassName(currency).value = currentRate;
            }
        }
    };



}