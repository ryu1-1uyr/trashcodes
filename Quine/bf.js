// def bfeval code
//   array = []
//   idx = 0
//   output = []
//   eval code.scan(/[\[\].,><+-]/).map(&{
//     '[' => 'while array[idx].to_i != 0',
//     ']' => 'end',
//     '.' => 'output<<array[idx].to_i.chr',
//     ',' => 'array[idx] = getc.ord',
//     '+' => 'array[idx] = array[idx].to_i + 1',
//     '-' => 'array[idx] = array[idx].to_i - 1',
//     '>' => 'idx+=1',
//     '<' => 'idx-=1'
//   }).join(';')
//   output.join
// end

const bfeval = (code) => {
    array = [... new Array(code.length).keys()]
    idx = 0 
    output = []
    sampleOutput = `array = [... new Array(${code.length}).fill(0)];idx = 0;output = [];`
    // code.replace(/[\[\].,><+-]/)
    input = [... code].map(x => {
        // console.log(x)
        switch (x) {
            case '[':
                sampleOutput+=('while(array[idx] != 0){console.log(array[idx] , idx);')
                break
            case ']':
                sampleOutput+=('};')
                break
            case '.':
                sampleOutput+=('output.join(array[idx]);console.log( (array[idx]-[]),array );')
                break
            case ',':
                sampleOutput+=(`array[idx] = ${x};`)
                break
            case '+':
                sampleOutput+=('array[idx] = (array[idx]-[]) + 1;')
                break
            case '-':
                sampleOutput+=('array[idx] = (array[idx]-[]) - 1;')
                break
            case '>':
                sampleOutput+=('idx+=1;console.log(idx);')
                break
            case '<':
                sampleOutput+=('idx-=1;')
                break
            default:

        }
    })
    return sampleOutput
}

console.log(bfeval('++++++++[>+++++<-]>.'))