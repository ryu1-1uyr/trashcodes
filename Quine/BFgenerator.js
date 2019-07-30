(stdin => {
    
    const inputs = [...(stdin + [])];
    let asciiCodes = []
    let output = '';
  
    //main code
  
    for (const input of inputs) {
      //使える文字なら => 置き換える
      
      asciiCodes.push(input.charCodeAt().toString() -[])
      
    //   for (let o = 0 ; o < input.charCodeAt().toString() -[] ; o++){
    //       output += '+'
    //     }
        
    //     output += '.'

  
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
  
    console.log(asciiCodes);
    console.log(output)
  })(require("fs").readFileSync("/dev/stdin", "utf8"));