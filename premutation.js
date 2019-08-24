// aaa,b,c,dを横一列で並べる
// 3つのaを連続させる
// 3つのaが隣り合わせにならない並べ方は何通りか
// b,cが両端にある並べ方

const a = 'aaa'
const b = 'b'
const c = 'c'
const d = 'd'

const permutation = ({ result = [], pre = [], post, n = post.length }) => {
  if (n > 0) {
    post.forEach((_, i) => {
      const rest = [...post];
      const elem = rest.splice(i, 1);
      permutation({ result, pre: [...pre, ...elem], post: rest, n: n - 1});
    });
  } else {
    result.push(pre);
  }
  return result;
};

// const array = [a, b, c, d];
// const results = permutation({ post: array });
// console.log(results);
// console.log(results.length);

const q2 = arr => {
    const prossArr = []
    for (let i = 0 , len = 6 ; i <= len ; i++ ) {
        if(!(i%2)){
            prossArr.push('a')
        }else {
            prossArr.push(permutation({post: arr}))
        }
    }
    return prossArr
} 

// console.log(q2([b,c,d]))

const array = ['a','a','a','b','c','d'];
const subarr_1 = ['b',  'a','a','a','d',  'c']
const subarr_2 = ['c',  'a','a','a','d',  'b']

function uniq(array) {
  return [...new Set(array)];
}

const permutation_2 = ({ result = [], pre = [], post, n = post.length }) => {
  if (n > 0) {
    post.forEach((_, i) => {
      const rest = [...post];
      const elem = rest.splice(i, 1);
      permutation({ result, pre: [...pre, ...elem], post: rest, n: n - 1});
    });
  } else {
    result.push(pre);
  }
  return result;
};

console.log('q3')

const prosedArr= []
permutation_2({post:['a','a','a','d']}).map(x=>{
    prosedArr.push(x.join(''))
    console.log(x)
})

console.log(uniq(prosedArr))

// console.log(
//     uniq(
//         permutation({post:['a','a','a','d']})
//     )
//     )

// const generatePermutation = perm => post => n => {
//     let elem, i, rest, len
//     const pre = []

//     if (n > 0) {
//         for (i = 0, len = post.length; i < len; ++i) {
//             rest = post.slice(0)//配列の複製
//             elem = rest.splice(i, 1)
//             generatePermutation(perm, pre.concat(elem), rest, n - 1)//さいき
//         }
//     } else {
//         perm.push(pre)
//     }


// }

// (function() {
//   var generatePermutation = function(perm, pre, post, n) {
//     var elem, i, rest, len;
//     if (n > 0)
//       for (i = 0, len = post.length; i < len; ++i) {
//         rest = post.slice(0);
//         elem = rest.splice(i, 1);
//         generatePermutation(perm, pre.concat(elem), rest, n - 1);
//       }
//     else
//       perm.push(pre);
//   };

//   /*
//   extend Array.prototype
//   e.g. [0, 1, 2].permutation(2)
//   => [[0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 1]]
//   */
//   Array.prototype.permutation = function(n) {
//     if (n == null) n = this.length;
//     var perm = [];
//     generatePermutation(perm, [], this, n);
//     return perm;
//   };
// })();