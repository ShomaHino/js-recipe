// 練習問題 １
const plus1 = function (x) {
  return x + 1
}
// 関数名:
const genkifunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!")
    } else {
      console.log(n)
    }
  }
}
// 引数:
// 返り値:

// 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...
const f1 = function (fig) {
  for (let a = 1; a <= fig; a + 3) {
    if (a % 3 === 0) {
      console.log("a!!!!")
    } else {
      console.log("a")
    }
  }
}
// f2: 1, 10, 100, 1000, 10000, ...
const f2 = function (nm) {
  for (let b = 1; b <= nm; b * 10) {
    if (b % 3 === 0) {
      console.log(b + "!!!!")
    } else {
      console.log(b)
    }
  }
}
// f3: 2, 14, 107, 1010, 10013, ...

// 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply を作成して正しく動くかテストしてください。
const multiply = function (x, y) {
  console.log(x * y)
}

// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound を作成して正しく動くかテストしてください。
const plusRound = function (z, w) {
  console.log(z + w)
}

//plus1(24)
genkifunction(24)
//f1(30)
//f2(10000)
//multiply(5, 7)
//plusRound(1, 6)
