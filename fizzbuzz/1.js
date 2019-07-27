const f = i => i%3?i:typeof(i)=='string'?i:'fizz'
const b = i => i%5?i:typeof(i)=='string'?i:'buzz'
const fb = i => i%15?i:typeof(i)=='string'?i:'fizz buzz'

for (let i = 1 ; i<16 ;i++){
    console.log(
        f(b(fb(i)))
        )
}
