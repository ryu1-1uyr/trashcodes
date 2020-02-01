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
  if (counter === 500) {
    clearInterval(clearNumber)
  }
  counter += 1

}, 1000 / 15);
// todo きつい点1 標準でsleepがない