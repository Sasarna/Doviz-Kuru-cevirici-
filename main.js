'use strict';

const amonuntİnput = document.querySelector("#amount");
const fistOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultİnput = document.querySelector("#result");

const currency = new Currecy(); 

runEvents();

function runEvents() {
    amonuntİnput.addEventListener("input" , exchange);
}

function exchange() {
    const amount = Number(amonuntİnput.value.trim());
    const fistOptionvalue = fistOption.options[fistOption.selectedIndex].textContent; 
    const secondOptionvalue = secondOption.options[secondOption.selectedIndex].textContent;
    
    currency.exchange(amount , fistOptionvalue , secondOptionvalue)
    .then((result) => {
        resultİnput.value = result.toFixed(3)
    });
}