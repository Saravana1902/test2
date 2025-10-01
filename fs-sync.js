const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
// const third = readFileSync('./content/third.txt', 'utf-8');
// console.log(first);
// console.log(second);
// console.log(third);
//writeFileSync('./content/result-sync.txt', `Here is the result: ${first},`);
console.log(first, second);

writeFileSync(`./content/result-sync.txt`,`here is the result of first and second file : ${first},${second}`,{flag : 'a'});

// const fs = require('fs');

// fs.readFileSync('./content/first.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// }); 
// same as the above code but with readFileSync             