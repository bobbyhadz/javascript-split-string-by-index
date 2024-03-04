// EXAMPLE 1 - Split a String at a specific Index using JavaScript

function split(str, index) {
  const result = [str.slice(0, index), str.slice(index)];

  return result;
}

const [first, second] = split('abcd', 2);

console.log(first); // 👉️ "ab"
console.log(second); // 👉️ "cd"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Split a String at multiple indices using JavaScript

// function split(str, ...indices) {
//   return [0, ...indices].map((startIndex, index, arr) => {
//     return str.slice(startIndex, arr[index + 1]);
//   });
// }

// // 👇️ [ 'ab', 'cd' ]
// console.log(split('abcd', 2));

// // 👇️ [ 'ab', 'cd', 'ef' ]
// console.log(split('abcdef', 2, 4));

// // 👇️ [ 'ab', 'cd', 'ef', 'gh' ]
// console.log(split('abcdefgh', 2, 4, 6));
