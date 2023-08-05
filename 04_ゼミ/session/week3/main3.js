const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choicesContainer = document.getElementById("choices-container")
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

  // クイズの選択肢を読み取って画面に表示する
  for (let i = 0; i < quiz.choices.length; i++) {
    const button = createChiceButton(quiz.choices[i], i)
    choicesContainer.appendChild(button)
  }
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
  photo.src = quiz.choices[choiceNumber].feedbackphoto
}

// choiceNumber番目の選択肢のボタンを作る関数
const createChiceButton = (choice, choiceNumber) => {
  const button = document.createElement("button")
  // 選択肢（ボタン）の中身をセットする
  button.textContent = choice.text
  // 選択肢（ボタン）をクリックした時に実行する関数をセットする
  button.onclick = function () {
    choose(choiceNumber)
  }
  // 生成したボタンをreturnする
  return button
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
