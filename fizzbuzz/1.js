const fizz = i => i%3?i:typeof(i)=='string'?i:'fizz'
const buzz = i => i%5?i:typeof(i)=='string'?i:'buzz'
const fizzbuzz = i => i%15?i:typeof(i)=='string'?i:'fizz buzz'

for (let i = 1 ; i<16 ;i++){
    console.log(
        fizz(buzz(fizzbuzz(i)))
        )
}
