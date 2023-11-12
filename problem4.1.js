function findingBadData(data) {
    const badData = [];
    const goodData = [];

    data.forEach(num => {
        if (num < 0) {
            badData.push(num);
        } else {
            goodData.push(num);
        }
    });

    return { badData, goodData };
}

const data = [2, -5, -7, -13];
const { badData, goodData } = findingBadData(data);

console.log("Bad Data:", badData);
let badDataNum = badData.length;
console.log('Number of Bad Data:', badDataNum);