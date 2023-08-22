const billCost = document.getElementById("bill");
const peopleNum = document.getElementById("people");
const buttons = document.querySelectorAll(".field-select button");

console.log(billCost.value)

document.addEventListener('DOMContentLoaded', () => {
    const billCostValue = billCost.value;
    console.log(billCostValue);

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let tipValue = button.innerText;
            tipValue = tipValue.substr(0, tipValue.length - 1); // removing the percentage symbol
            console.log(billCostValue)
        })
    })
})
