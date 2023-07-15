const button = document.getElementById("button")
//button 要素と click イベント
button.onclick = function () {
  alert("you just clicked1")
} //アラートが表示される

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (e) {
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue
