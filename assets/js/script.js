const billInput = document.querySelector(".bill-input");
const numOfPeople = document.querySelector(".numpeople");
const buttons = document.querySelectorAll(".btn");
const tipAmountHTML = document.querySelector(".amount__value");
const totalAmountHTML = document.querySelector(".total__value");
const customTip = document.getElementById("custom");
let tipValue = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        tipValue = Number(
            button.innerHTML.substr(0, button.innerHTML.length - 1)
        );
        console.log(tipValue);
    });
});

function calculateTipAndTotal() {
    let billValue = parseFloat(billInput.value);
    let people = parseFloat(numOfPeople.value);
    let tipAmount = ((billValue * (tipValue / 100)) / people).toFixed(2);
    let totalAmount = ((billValue + parseFloat(tipAmount)) / people).toFixed(2);
    tipAmountHTML.textContent = tipAmount;
    totalAmountHTML.textContent = totalAmount;
}

numOfPeople.addEventListener("keyup", calculateTipAndTotal);
