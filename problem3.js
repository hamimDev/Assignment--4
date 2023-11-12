function isLGSeven(inputNumber) {
    if (Math.abs(inputNumber - 7) < 7) {
        return inputNumber - 7;
    } else {
        return inputNumber * 2;
    }
}
let result1 = isLGSeven(6);
let result2 = isLGSeven(-11);
let result3 = isLGSeven(15);

console.log(result1);
console.log(result2);
console.log(result3);
