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

*/
// console["log"]((_=()=>{let a = 1;return a + 'console["log"]((_='+_+')())'})())

console.log((_=()=>{
  const fizz = x => x % 3 ? x : 'Fizz'
  const buzz = x => x % 5 ? x : 'Buzz'
  const fizzbuzz = x => x % 15 ? x : 'FizzBuzz'
  let counter = 0
  const clearNumber = setInterval(x=>{

    let str = ''

    for (let i=0;i<27;i++){
      for (let o = 0;o<102;o++){
        // str += counter +''
        if (counter < 50){
          str += 'A' 
        }else if (counter < 100){
          str += 'B'
        }else if(counter < 150){
          str += 'C'
        }else if(counter < 200){
          str += 'D'
        }else if(counter < 250){
          str += 'E'
        }else {
          str += 'F'
        }
      }
      str+'\n'
    }

    if(counter === 350){
      clearInterval(clearNumber)
    }
    counter++
  })

  return 'console.log((_='+_+[...Array(Math.floor(Math.random()*30)).keys()]
    .map(x=>x+1)
    .map(x=>{if(typeof(x)==='string'){return x}else{return fizzbuzz(x)}})
    .map(x=>{if(typeof(x)==='string'){return x}else{return buzz(x)}})
    .map(x=>{if(typeof(x)==='string'){return x}else{return fizz(x)}})

})())