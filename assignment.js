// 1.problem
// radianToDegree

function radianToDegree(radian) {
    return radian * (180 / Math.PI);
  }
  const InRadian =5; 
const InDegree = radianToDegree(InRadian);
console.log(InDegree);


// 2.problem
// isJavaScriptFile true or false

function isJavaScriptFile(inputString) {
    const lowerCaseString = inputString.toLowerCase();
    return lowerCaseString.endsWith('.js');
  }
const example1 = "document.js";
const example2 = "myReport.JS";
const example3 = "important.txt";

console.log(isJavaScriptFile(example1)); // true
console.log(isJavaScriptFile(example2)); // true
console.log(isJavaScriptFile(example3)); // false

// 3.problem
// Calculate the total oil price that I have to pay.

function oilPrice(dieselLiters, petrolLiters, octaneLiters) {
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
  
    const totalCost = (dieselLiters * dieselPrice) + (petrolLiters * petrolPrice) + (octaneLiters * octanePrice);
    
    return totalCost;
  }
  
  const dieselLiters = 3;
  const petrolLiters = 2;
  const octaneLiters = 4;
  
  const totalCost = oilPrice(dieselLiters, petrolLiters, octaneLiters);
  
  console.log(`allPrice: ${totalCost} tk`);

// 4.problem

function publicBusFare(totalPeople) {
    const busCapacity = 50;
    const microbusCapacity = 11;
    const motCount = Math.min(totalPeople, busCapacity);
    totalPeople -= motCount;
    const microbusCount = Math.min(totalPeople, microbusCapacity);
    totalPeople -= microbusCount;
  
    const remainingPeople = totalPeople;
    const publicBusFare = remainingPeople * 250; 
    return publicBusFare;
  }

  const totalPeople = 65; // 65 জন
  const fare = publicBusFare(totalPeople);
  
  console.log(`Public Bus allMoney: ${fare}tk`);
 

// 5.problem

function isBestFriend(names) {
    let uniqueNames = new Set(names);
    return uniqueNames.size !== names.length;
}

let friends = ["Mona", "Sona", "Mona", "Sona"];
let result = isBestFriend(friends);
let friends1 = ["Mona", "Jona", "Gona", "Tona"];
let result1 = isBestFriend(friends1);

console.log(result);
console.log(result1);

