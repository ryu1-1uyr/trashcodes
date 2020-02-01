const [w,h] = process.stdout.getWindowSize()

// console.log([w,h])
// for (let i = 0 ; i < w ; i++) {
//   console.log('a')
// }

/*
####   #   #  #   #
#   #   # #   #   #
####     #    #   #
#  #     #    #   #
#   #    #     ###
*/

let list = [
'  ####   #   #  #   # ',
'  #   #   # #   #   # ',
'  ####     #    #   # ',
'  #  #     #    #   # ',
'  #   #    #     ###  ',
  ]

// console.log(list.length)

let counter = 0 
const clearNumber = setInterval(() => {
  list.map(x=>{
    let cha = ''
    for (let o=0;o<counter;o++){
      cha += ' '
    }
    cha += x
    console.log(cha)
  })
  for (let i =0;i < h -3 - list.length;i++){
    console.log(' ')
  }
  if (counter === 500) {
    clearInterval(clearNumber)
  }
  counter += 1

}, 1000 / 15);
//todo 時々変なグリッジみたいなの起こして面白いwウケる

//えんはーしず => ターミナルの制御をするためのライブラリを使うと良い
//ncurses https://github.com/mscdex/node-ncurses