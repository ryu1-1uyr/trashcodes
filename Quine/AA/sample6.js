console["log"]((_=()=>{const [w,h] = process.stdout.getWindowSize()
let list = ['//  ####   #   #  #   # ','//  #   #   # #   #   # ','//  ####     #    #   # ','//  #  #     #    #   # ','//  #   #    #     ###  ']
let counter = 0 ;const clearNumber = setInterval(() => {list.map(x=>{let cha = '';for(let o=0;o<counter;o++){cha += ' '}cha += x;console.log(cha);});for (let i =0;i < h -6 - list.length;i++){console.log(' ')}console.log(  'console["log"]((_='+_+')())');if (counter === 500) {clearInterval(clearNumber)}counter += 1;}, 1000 / 15);
  return  'console["log"]((_='+_+')())'})())