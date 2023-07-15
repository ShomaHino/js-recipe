const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const multiplyButton = document.getElementById("multiply-button")
const distributeButton = document.getElementById("distribute-button")
const number1 = document.getElementById("input-number1")
const number2 = document.getElementById("input-number2")
const AC = document.getElementById("AC")
let outcome = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function () {
  // count を更新
  outcome = Number(number1.value) + Number(number2.value)
  // count を表示
  display.textContent = outcome
}

minusButton.onclick = function () {
  outcome = Number(number1.value) - Number(number2.value)
  display.textContent = outcome
}

multiplyButton.onclick = function () {
  outcome = Number(number1.value) * Number(number2.value)
  display.textContent = outcome
}

distributeButton.onclick = function () {
  outcome = Number(number1.value) / Number(number2.value)
  display.textContent = outcome
}

AC.onclick = function () {
  outcome = 0
  display.textContent = 0
}
