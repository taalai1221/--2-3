let numbers = [7, -3, 10, 4, 7];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let arrSum = 0;
for (let i = 0; i < numbers.length; i++) {
  arrSum += numbers[i];
}
console.log(arrSum);

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);

let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log(min);

console.log(numbers.length);

let arrEvenSum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    arrEvenSum += numbers[i];
  }
}
console.log(arrEvenSum);

let negCount = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    negCount++;
  }
}
console.log(negCount);

let product = 1;
for (let i = 0; i < numbers.length; i++) {
  product *= numbers[i];
}
console.log(product);

let maxIndex = 0;
for (let i = 1; i < numbers.length; i++) {
if (numbers[i] > numbers[maxIndex]) {
    maxIndex = i;
}
}
console.log(maxIndex);

let minIndex = 0;
for (let i = 1; i < numbers.length; i++) {
if (numbers[i] < numbers[minIndex]) {
    minIndex = i;
}
}
console.log(minIndex);

let hasTen = false;
for (let i = 0; i < numbers.length; i++) {
if (numbers[i] === 10) {
    hasTen = true;
}
}
console.log(hasTen);

let countSeven = 0;
for (let i = 0; i < numbers.length; i++) {
if (numbers[i] === 7) {
    countSeven++;
}
}
console.log(countSeven);

let lastPositive = null;
for (let i = 0; i < numbers.length; i++) {
if (numbers[i] > 0) {
    lastPositive = numbers[i];
}
}
console.log(lastPositive);

let total = 0;
for (let i = 0; i < numbers.length; i++) {
total += numbers[i];
}
let average = total / numbers.length;
console.log(average);