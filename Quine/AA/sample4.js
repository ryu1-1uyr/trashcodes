const [w,h] = process.stdout.getWindowSize()

// console.log([w,h])
// for (let i = 0 ; i < w ; i++) {
//   console.log('a')
// }

let list = [
  '                 ',
  '   PPPPPPPPPP    ',
  '   PP       PP   ',
  '   PP       PP   ',
  '   PPPPPPPPPP    ',
  '   PP            ',
  '   PP            ',
  '   PP            ',
  '                 ',
  ]

// console.log(list.length)

let counter = 0 
let char = 'a'
const clearNumber = setInterval(() => {
  // char = ' ' + char 
  // console.log(char)
  list.map(x=>{
    let cha = ''
    for (let o=0;o<counter;o++){
      cha += ' '
    }
    cha += x
    console.log(cha)
  })
  for (let i =0;i < h -3 - list.length;i++){
    console.log('🥺')
  }
  if (counter === 500) {
    clearInterval(clearNumber)
  }
  counter += 1

}, 1000 / 15);
//todo 実装が雑なので右端まで行くと文字が死ぬ