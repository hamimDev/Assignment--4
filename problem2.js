function evenOdd(inputString) {
    let length = inputString.length;
    if (length % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
let result1 = evenOdd("Phero");
let result2 = evenOdd("Batch7");
let result3 = evenOdd("chatgpt");



console.log(result1);
console.log(result2); 
console.log(result3);
