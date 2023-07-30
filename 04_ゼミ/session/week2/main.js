const MemoInput = document.getElementById("memo-input")
const AddButton = document.getElementById("add-button")
const MemoContainer = document.getElementById("memo-container")
let memos = []

AddButton.onclick = function () {
  const div = document.createElement("div") //div要素をHTML に追加し、divとする。
  div.textContent = MemoInput.value
  MemoContainer.append(div) //newDiv要素をMemoContainerの最後に追加

  const button = document.createElement("button")
  button.textContent = "削除"
  div.append(button)

  MemoInput.value = "" //ボタンを押したらボックスクリア//
  button.onclick = function () {
    div.remove()
  }

  localStorage.memo = JSON.stringify(div)

  memos.push(MemoInput.value)
  MemoInput.value = ""
  MemoContainer.textContent = ""
  for (let i = 0; i < memos.length; i++) {
    const div = document.createElement("div")
    div.textContent = memos[i]
    MemoContainer.append(div)
  }
}

const memoJson = localStorage.memo
memos = JSON.parse(memoJson)

for (let i = 0; i < memos.length; i++) {
  const div = document.createElement("div")
  div.textContent = memos[i]
  MemoContainer.append(div)
}
