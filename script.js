/*
Given any string, find the number of characters of the same letter. The Sequence of the output of counts should be in order in which the letters come in the word. Ignore whitespaces. Also, focus on optimizing code as much as possible.

Example 1: Amolya Sharma
The expected answer would be:
A-4
M-2
O-1
L-1
Y-1
S-1
H-1
R-1

*/

let a = 'Amolya Sharma';
a = a.toUpperCase()
const charCount = {};
for (let i = 0; i < a.length; i++) {
    const char = a[i];
    if (char in charCount) {
        charCount[char] += 1;
        } else {
            charCount[char] = 1;
            }
            }
            for (let key in charCount) {
                console.log(`${key}-${charCount[key]}`);
        }


// string = "Amolya Sharma"
// for (let i = 0; i < a.length; i++) {
//     if (a[i] != " ") {
//         let count = 0;
//         for (let j = i; j < a.length; j++) {
//             if (a[j] == a[i]) {
//                 count += 1
//                 } else {
//                     break
//                 }
//             }
//             if(a[i] = a[i]){
//                 console.log(a[i] + "-" + count)
//             }
//         }
//     }



    
    



 