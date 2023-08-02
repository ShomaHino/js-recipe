const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
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
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
  //フィードバックの画像
  photo.src = quiz.choices[choiceNumber].feedbackphoto
}

choice1.onclick = function () {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  // 2 番目の選択肢を選択
  choose(2)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
