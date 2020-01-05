/*
####   #   #  #   #
#   #   # #   #   #
####     #    #   #
#  #     #    #   #
#   #    #     ###

このQuineの弱点 => 変数定義が使えない、と思ったけど、関数自体を_に格納して文字へキャストしてたわね…

あーこれreturn使えば比較的楽に変数定義いけるわ
コロージャー的に書くことで、任意のコードを全て実現できる

*/
// console["log"]((_=()=>{let a = 1;return a + 'console["log"]((_='+_+')())'})())

console.log((_=()=>{
  const fizz = x => x % 3 ? x : 'Fizz'
  const buzz = x => x % 5 ? x : 'Buzz'
  const fizzbuzz = x => x % 15 ? x : 'FizzBuzz'

  return 'console.log((_='+_+[...Array(Math.floor(Math.random()*30)).keys()]
    .map(x=>x+1)
    .map(x=>{if(typeof(x)==='string'){return x}else{return fizzbuzz(x)}})
    .map(x=>{if(typeof(x)==='string'){return x}else{return buzz(x)}})
    .map(x=>{if(typeof(x)==='string'){return x}else{return fizz(x)}})

})())