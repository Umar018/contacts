
//TODO Roman2integer
// function romanToInt(s) {
//     const romanMap = {
//         'I': 1, 'V': 5, 'X': 10, 'L': 50,
//         'C': 100, 'D': 500, 'M': 1000
//     };
    
//     let total = 0;
    
//     for (let i = 0; i < s.length; i++) {
//         let currentVal = romanMap[s[i]];
//         let nextVal = romanMap[s[i + 1]];

//         if (nextVal > currentVal) {
//             total -= currentVal;
//         } else {
//             total += currentVal; 
//         }
//     }
    
//     return total;
// }

//TODO defis
// function splitLongWords(text) {
//     return text.split(' ').map(word => {
//         if (word.length > 10) {
//             let mid = Math.floor(word.length / 2 - 1);
//             if (word.length % 2 === 1) {
//                 mid += 1;
//             }
//             return word.slice(0, mid) + '-' + word.slice(mid);
//         }
//         return word;
//     }).join(' ');
// }


//       UY ISHI OSHIQHA KOP BOP KETDI
