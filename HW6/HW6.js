//1
const getRandomArray = (length, min, max) => {
    const arr = [...Array(length)].map((item) => Math.floor(Math.random() * (max - min + 1)) + min);
    return arr;
};
console.log(getRandomArray(15, 1, 100));


//3
const getAverage = (...numbers) => {
    const intNumbers = numbers.filter(num => Number.isInteger(num))
    const average = intNumbers.reduce((acc, num) => acc + num, 0) / intNumbers.length;
    return average;
 };
 console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));




//5
const filterEvenNumbers = (...numbers) => numbers.filter((number) => (number % 2));
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));
//6
const countPositiveNumbers = (...numbers) => {
    return numbers.reduce((acum, current) => (current > 0) ? acum + 1 : acum, 0);}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));
//7
const getDividedByFive = (...numbers) => numbers.filter(number => number % 5 === 0);
console.log(getDividedByFive(10, 5, 43, 45, 55, 63, 2, 22));


//9
const divideByThree = (word) => {
    word = word.toLowerCase().split('');
    const newWord = [];
    let i = 0; 
    while (i < word.length) {
      newWord.push(word.slice(i, i += 3).join(''));
    }
    return newWord;
};
console.log(divideByThree("live"));