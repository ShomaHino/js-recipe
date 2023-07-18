const fizzbuzz = function (number) {
  for (let i = 0; i <= number; i++) {
    if (i % 3 === 0 && i !== 0) {
      if (i % 15 === 0) {
        console.log("buzz")
      } else {
        console.log("fizzbuzz")
      }
    } else {
      console.log(i)
    }
  }
}

fizzbuzz(100)
