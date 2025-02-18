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

Example 1: Chinmay Kulkarni
The expected answer would be:
C-1
H-1
I-1
N-2
M-1
A-2
Y-1
K-2
U-1
L-1
R-1
I-1


*/

let a = 'Amolya Sharma';
a = a.toUpperCase()
a = a.replace(" ","")
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


let b = 'Chinmay Kulkarni';
b = b.toUpperCase()
b = b.replace(" ","")
const charrCount = {};
for (let i = 0; i < b.length; i++) {
    const char = b[i];
    if (char in charrCount) {
        charrCount[char] += 1;
        } else {
            charrCount[char] = 1;
            }
            }
            for (let key in charrCount) {
                console.log(`${key}-${charrCount[key]}`);
        }







    
    



 