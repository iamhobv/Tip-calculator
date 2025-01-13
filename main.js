let billAmount = document.getElementById("billamount");
let percents = document.getElementsByClassName("percent");
let customPercent = document.getElementById("customPercent");
let numOfPll = document.getElementById("numOfPll");
let tipAmount = document.getElementById("tipAmount");
let tolAmount = document.getElementById("tolAmount");
let resetBtn = document.getElementById("resetBtn");

let billValue = 0;
let tipFlag = 0;
let tipPercent = 5;
let customPercentVal = 0;
let numOfPllVal = 0;
let totTip = 0;

billAmount.addEventListener("focus", function () {
  billAmount.select();
});
billAmount.addEventListener("keyup", function () {
  billValue = billAmount.value;
  if (numOfPllVal != "") {
    calcTip();
    totPer();
  }
});

customPercent.addEventListener("keyup", function () {
  customPercentVal = customPercent.value;
  tipPercent = customPercentVal;
  if (customPercentVal != "") {
    removeActive();
  } else {
    percents[0].classList.add("active");
    tipPercent = 5;
  }
  if (customPercentVal > 100) {
    tipPercent = 100;
  }
  console.log(customPercentVal);
  calcTip();
  totPer();
});

numOfPll.addEventListener("focus", function () {
  numOfPll.select();
});
numOfPll.addEventListener("keyup", function () {
  numOfPllVal = numOfPll.value;
  if (billAmount != "") {
    calcTip();
    totPer();
  }
});

for (let i = 0; i < percents.length - 1; i++) {
  percents[i].addEventListener("click", function () {
    tipFlag = i;
    removeActive();
    switch (tipFlag) {
      case 0:
        tipPercent = 5;
        percents[0].classList.add("active");
        calcTip();
        totPer();
        break;
      case 1:
        tipPercent = 10;
        percents[1].classList.add("active");
        calcTip();
        totPer();

        break;
      case 2:
        tipPercent = 15;
        percents[2].classList.add("active");
        calcTip();
        totPer();

        break;
      case 3:
        tipPercent = 25;
        percents[3].classList.add("active");
        calcTip();
        totPer();

        break;
      case 4:
        tipPercent = 50;
        percents[4].classList.add("active");
        calcTip();
        totPer();
        break;

      default:
        break;
    }
  });
}
function removeActive() {
  for (let j = 0; j < percents.length; j++) {
    percents[j].classList.remove("active");
  }
}

function calcTip() {
  let tipsAm = billValue * (tipPercent / 100);
  totTip = tipsAm / numOfPllVal;

  if (totTip == Infinity || isNaN(totTip)) {
    totTip = 0;
  }

  tipAmount.innerHTML = `$${totTip.toFixed(3)}`;
}

function totPer() {
  console.log(billValue, totTip, numOfPllVal);
  let totalppl = (Number(billValue) + totTip) / numOfPllVal;
  if (totalppl == Infinity || isNaN(totalppl)) {
    totalppl = 0;
  }
  tolAmount.innerHTML = `$${totalppl.toFixed(3)}`;
}

resetBtn.addEventListener("click", function () {
  location.reload();
});
