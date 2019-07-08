// change lowercase check to regex match for letter case

// const caesar = function(str, num) {
//   let caesarString = '';
//   for (let i = 0; i < str.length; i++) {
//       if (str[i].match(/[A-Z]/i)) {
//         let charCode = str.charCodeAt(i);
//     if ( (charCode >= 0  && charCode <= 65) &&  || (charCode >= 65 && charCode <= 127) ) {
//         let newChar = String.fromCharCode(charCode);
//         caesarString += newChar;
//       } else {
//           caesarString += str[i];
//       }
//   }
//   return caesarString;
// }
// const caesar = function(str, num) {
//     // create result string variable
//     let caesarString = '';

//     // is character a letter?
//     if (str[i].match(/[A-Z]/i)) {
//       // character in bounds?
//       if ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 90)) {
//         // get new character code
//         let newCharCode = str.charCodeAt(i) + num;
//         // get new character
//         let newChar = String.fromCharCode(charCode);
//         // add new character to result
//         caesarString += str[i];
//       } else {
//         // get character code
//         let charCode = str.charCodeAt(i);
//         // is the charCode less than the lower bound
//         if (charCode < 65)
//       }
//     }    
// }


// const caesar = function(str, num) {
//   const lowerUPPER = 65;
//   const upperUPPER = 90;
//   const lowerLOWER = 97;
//   const upperLOWER = 122
//   let caesarString = '';
//   let i = 0;
//   while (i < str.length) {
//     if (str[i].match(/[a-z]/i)) {
//         // define some helpful variables
//         let code = str.charCodeAt(i);
//         let newCode = code + num;
//         if (isLowerCase(code)) {
//             if (inBounds(newCode, lowerLOWER, upperLOWER))  {
//                 let newChar = String.fromCharCode(newCode);
//                 caesarString += newChar;
//             } else if (newCode > upperLOWER) {
//                 let remainder = (newCode - upperLOWER) % 25;
//                 let adjNewCode = upperLOWER + remainder;
//                 let newChar = String.fromCharCode(adjNewCode);
//                 caesarString += newChar;
//             } else {
//                 let remainder = lowerLOWER - newCode;
//                 let adjNewCode = upperLOWER - remainder;
//                 let newChar = String.fromCharCode(adjNewCode);
//                 caesarString += newChar;
//             }
//         // is upperCase
//         } else {
//             if (inBounds(newCode, lowerUPPER, upperUPPER))  {
//                 let newChar = String.fromCharCode(newCode);
//                 caesarString += newChar;
//             } else if (newCode < lowerUPPER)  {
//                 let remainder = (lowerUPPER - newCode) % 26;
//                 let adjNewCode = upperUPPER - remainder + 1;
//                 let newChar = String.fromCharCode(adjNewCode);
//                 caesarString += newChar;
//             }  else {
//                 let remainder = newCode - upperUPPER;
//                 let adjNewCode = lowerUPPER + remainder - 1;
//                 let newChar = String.fromCharCode(adjNewCode);
//                 caesarString += newChar;
//             }
//         }
//     } else {
//         caesarString += str[i];
//     }
//     i++;
//   }
//   return caesarString;
// }

// const isLowerCase = function(code) {
//   if ((code >= 97) && (code <= 132)) {
//       return true;
//   } else {
//       return false;
//   }
// }

// const inBounds = function(myNum, lowNum, highNum) {
// if ((myNum <= highNum) && (myNum >= lowNum)) {
//       return true;
//     } else {
//       return false;
//     }
// }

// const wrap = function(limit, num) {
//     let remainder = Math.abs(limit - num)%26;
    
//     return remainder
// }

// test
// let shifts = 75;
// let code = 72;
// let minUp = 65;
// let maxUp = 90;


const shifter = function() {
  let i = 1;
  while (i <= shifts)  {
    
    if (code == maxUp) {
      // let next shift set code at minUp 
        code = minUp;   
    }
    code += 1; 
    i++; 
  }
  return code;
}
// The code for E is 69

module.exports = caesar
