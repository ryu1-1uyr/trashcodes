const fizz = i => i%3?i:'fizz '
const buzz = i => i%5?i:'buzz '
const fizzbuzz = i => i%15?i:'fizz buzz'

console.log(fizz(buzz(fizzbuzz(16))))
