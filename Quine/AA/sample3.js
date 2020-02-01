const [w,h] = process.stdout.getWindowSize()

// console.log([w,h])
// for (let i = 0 ; i < w ; i++) {
//   console.log('a')
// }
let counter = 0 
let char = 'a'
const clearNumber = setInterval(() => {
  char = ' ' + char 
  console.log(char)
  for (let i =0;i < h -3;i++){
    console.log('🥺')
  }
  if (counter === 500) {
    clearInterval(clearNumber)
  }
  counter += 1

}, 1000 / 15);
//todo なんか知らんけど文字が飛ぶ