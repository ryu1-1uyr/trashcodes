/*
####   #   #  #   #
#   #   # #   #   #
####     #    #   #
#  #     #    #   #
#   #    #     ###

このQuineの弱点 => 変数定義が使えない、と思ったけど、関数自体を_に格納して文字へキャストしてたわね…

あーこれreturn使えば比較的楽に変数定義いけるわ
コロージャー的に書くことで、任意のコードを全て実現できる

標準入力を常に受け付けるようにしてQが押されるまでアニメーションとかでもいいかもしれない

いまのターミナルの拡大率なら27かいconsole.logを挟めば1画面になる

横幅102の縦27

setINtervalの使用を理解して30FPSくらいでアニメーションさせるとよさそう
*/
// console["log"]((_=()=>{let a = 1;return a + 'console["log"]((_='+_+')())'})())

// console.log((_=()=>{
//   const fizz = x => x % 3 ? x : 'Fizz'
//   const buzz = x => x % 5 ? x : 'Buzz'
//   const fizzbuzz = x => x % 15 ? x : 'FizzBuzz'
//   let counter = 0
//   const clearNumber = setInterval(x=>{

//     let str = ''

//     for (let i=0;i<27;i++){
//       for (let o = 0;o<102;o++){
//         // str += counter +''
//         if (counter < 50){
//           str += 'A' 
//         }else if (counter < 100){
//           str += 'B'
//         }else if(counter < 150){
//           str += 'C'
//         }else if(counter < 200){
//           str += 'D'
//         }else if(counter < 250){
//           str += 'E'
//         }else {
//           str += 'F'
//         }
//       }
//       str+'\n'
//     }

//     if(counter === 350){
//       clearInterval(clearNumber)
//     }
//     counter++
//   },1000 / 30)

//   return 'console.log((_='+_+[...Array(Math.floor(Math.random()*30)).keys()]
//     .map(x=>x+1)
//     .map(x=>{if(typeof(x)==='string'){return x}else{return fizzbuzz(x)}})
//     .map(x=>{if(typeof(x)==='string'){return x}else{return buzz(x)}})
//     .map(x=>{if(typeof(x)==='string'){return x}else{return fizz(x)}})

// })())

// 1画面2780文字となる
// let counter = 0
// const clearNumber = setInterval(x=>{

//   let str = ''


//     // for(let i = 0; i < 2754 ; i++ ) {
//     //   str += '1'
//     // }
//     // console.log(str)
//     // console.log('\n')
//     // str = ''

//     for (let o = 0 ; o > 31 ; o++) {
//       for(let i=0;i<119;i++){
//         console.log(i)
//       }
//     }

//   // for (let i=0;i<27;i++){
//   //   let str = ''
//   //   for (let o = 0;o<102;o++){
//   //     // str += counter +''
//   //     if (counter < 50){
//   //       str += 'A' 
//   //     }else if(counter < 100){
//   //       str += 'B'
//   //     }else if(counter < 150){
//   //       str += 'C'
//   //     }else if(counter < 200){
//   //       str += 'D'
//   //     }else if(counter < 250){
//   //       str += 'E'
//   //     }else {
//   //       str += 'F'
//   //     }
//   //   }
//   //   str+'\n'
//   //   console.log(str)
//   // }

//   if(counter === 350){
//     clearInterval(clearNumber)
//   }
//   counter++
// })//1000 / 30
// let str = ''

// for (let o = 0 ; o < 31 ; o++) {
//   for(let i=0;i<119;i++){
//     str += 'a'
//   }
//   console.log(str)
//   str = ''
// }
let counter = 0
let str = ''
const clearNumber = setInterval(() => {

// for (let o = 0 ; o < 31 ; o++) {
//   for(let i=0;i<119;i++){
//     str += 'a'
//   }
//   console.log(str)
//   str = ''
// }

// console.log(counter % 10)

let leng = counter % 10

// console.log(leng)
for (let i = 0;i < leng + 1 ;i++) {
  str += '>'
}

console.log( str + leng )
str = ''

// if(counter % 10 ) {}
if(counter === 350){
  clearInterval(clearNumber)
}

counter++
}, 1000 / 15);