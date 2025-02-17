const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const box = document.getElementById("box")
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
//buttonをリストの数だけつくる関数
const createbutton = function () {
  for (
    let i = 0;
    i < quiz.choices.length;
    i++ //配列は０から！！
  ) {
    let button = document.createElement("button")
    button.textContent = quiz.choices[i].text
    box.appendChild(button)
    button.textContent = quiz.choices[i].text
    //クリック時のfeedbackをquizと紐づけ
    button.onclick = function (i) {
      feedback.textContent = quiz.choices[i].feedback
      photo.src = quiz.choices[i].feedbackphoto
    }
  }
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text
  // 画像を表示
  quizImage.src = quiz.image

  createbutton()
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
