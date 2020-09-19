var inputOne = document.querySelector("#input-one");
var inputSecond = document.querySelector("#input-second");

var swap2 = document.querySelector("#swap");

var firstSelect = document.querySelector("#first");
var secondSelect = document.querySelector("#second");

inputOne.addEventListener("input", function () {
  calculate();
});

inputSecond.addEventListener("input", function () {
  calculate2();
});

// Fetch exchange rates and update the DOM
function calculate() {
  fetch(`https://api.exchangerate-api.com/v4/latest/` + firstSelect.value)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[secondSelect.value];

      inputSecond.value = (inputOne.value * rate).toFixed(2);
    });
}

function calculate2() {
  fetch(`https://api.exchangerate-api.com/v4/latest/` + secondSelect.value)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[firstSelect.value];
      inputOne.value = (inputSecond.value * rate).toFixed(2);
    });
}

calculate();

swap2.addEventListener("click", swap);

function swap() {
  let inter = 0;
  inter = inputOne.value;
  inputOne.value = inputSecond.value;
  inputSecond.value = inter;
  let inter2 = 0;
  inter2 = firstSelect.value;
  firstSelect.value = secondSelect.value;
  secondSelect.value = inter2;
}

function convertUSDtoEUR() {
  if (firstSelect.value === secondSelect.value) {
    inputSecond.value = inputOne.value;
  } else {
    let valConverti = 0;
    valConverti = inputOne.value * 0.883414;
    inputSecond.value = valConverti;
    return valConverti;
  }
}
