const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const feedback = document.getElementById("feedback")
const photo = document.getElementById("photo")

// クイズの内容
const quiz = {
  text: "この魚の名前は何でしょう？",
  image: "session_week3_photo/hama.JPG",
  choices: [
    {
      text: "ハマクマノミ",
      feedback: "正解！沖縄などの南方の海のミドリイソギンチャクによくいる。",
      feedbackphoto: "session_week3_photo/hama.JPG",
    },
    {
      text: "ハナビラクマノミ",
      feedback: "残念！ハナビラクマノミはこいつ！",
      feedbackphoto: "session_week3_photo/hana.JPG",
    },
    {
      text: "カクレクマノミ",
      feedback: "残念！カクレクマノミはこいつ！",
      feedbackphoto: "session_week3_photo/kakure.JPG",
    },
    {
      text: "クマノミ",
      feedback: "残念！クマノミはこいつ！",
      feedbackphoto: "session_week3_photo/kuma.JPG",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text
  // 画像を表示
  quizImage.src = quiz.image
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
//buttomをリストの数だけつくる関数
const createbuttom = function () {
  for (let i = 0; i <= quiz.choices.length; i++) {
    const buttom = document.createElement("buttom")
    buttom.append("box")
    buttom.classList.add("choice" + i)
  }
}

createbuttom()

//つくったボタンを取得
const choice0 = document.getElementsByClassName("choice0")
const choice1 = document.getElementsByClassName("choice1")
const choice2 = document.getElementsByClassName("choice2")
const choice3 = document.getElementsByClassName("choice3")
// 選択肢（ボタン）の中身を表示
choice0.textContent = quiz.choices[0].text
choice1.textContent = quiz.choices[1].text
choice2.textContent = quiz.choices[2].text
choice3.textContent = quiz.choices[3].text

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
  //フィードバックの画像
  photo.src = quiz.choices[choiceNumber].feedbackphoto
}

choice0.onclick = function () {
  // 0 番目の選択肢を選択
  choose(0)
}
choice1.onclick = function () {
  // 1 番目の選択肢を選択
  choose(1)
}
choice2.onclick = function () {
  // 2 番目の選択肢を選択
  choose(2)
}
choice3.onclick = function () {
  // 3 番目の選択肢を選択
  choose(3)
}
// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
