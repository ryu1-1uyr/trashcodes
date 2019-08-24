(stdin => {
    
    const inputs = [...(stdin + [])];
    let asciiCodes = []
    let output = '';
  
    //main code
    for (const input of inputs) {
      asciiCodes.push(input.charCodeAt().toString() -[])
    }

    let nowhere = 0
    for (const asciiCode of asciiCodes) {
        if (nowhere > asciiCode-[]) {
            for (let o = nowhere; o != asciiCode ; o--) {
                output += '-'
            }
            output += '.'
        } else if (nowhere < asciiCode-[]) {
            for (let i = nowhere ; i< asciiCode ; i++ ) {
                output += '+'
            }
            output += '.'
        } else if (nowhere == asciiCode) {
            output += '.'
        }
        nowhere = asciiCode -[]
    }
  
    console.log(output)
  })(require("fs").readFileSync("/dev/stdin", "utf8"));