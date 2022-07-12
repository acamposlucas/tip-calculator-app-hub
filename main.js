const bill = document.getElementById("bill");
const tips = document.querySelectorAll("input[name='tip']");
const customTip = document.getElementById("custom");
const people = document.getElementById("people");
const reset = document.getElementById("reset");

let billValue = 0.0;
let tipValue = 0.25;
let numberOfPeople = 1;

bill.addEventListener("input", () => {
  bill.value.includes(",") ? bill.value.replace(",", ".") : null;
  billValue = bill.value;

  calculate();
});

tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    customTip.value = "";
    tipValue = tip.value / 100;

    calculate();
  });
});

people.addEventListener("input", () => {
  numberOfPeople = Number(people.value);
  calculate();
});

customTip.addEventListener("focusout", () => {
  tips.forEach((tip) => (tip.checked = false));
  tipValue = Number(customTip.value) / 100;
  calculate();
});

function calculate() {
  if (numberOfPeople >= 1) {
    let tip = (billValue * tipValue) / numberOfPeople;
    let total = (billValue * (tipValue + 1)) / numberOfPeople;
    showOnScreen(tip, total);
  }
}

const tipAmount = document.getElementById("tipAmount");
const personAmount = document.getElementById("personAmount");

function showOnScreen(tip, total) {
  tipAmount.innerText = `$${tip.toFixed(2)}`;
  personAmount.innerText = `$${total.toFixed(2)}`;
}

function clearCalculator() {
  bill.value = "";
  people.value = "";
  tipAmount.innerText = `$0.00`;
  personAmount.innerText = `$0.00`;
}

reset.addEventListener("click", clearCalculator);
