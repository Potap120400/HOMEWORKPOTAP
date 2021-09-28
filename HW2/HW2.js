
let N;
do {
    N = prompt('Введіть значення N:','').trim();
} while (N === '' || isNaN (N) || N === null);
const parsedN = parseInt(N);
console.log (parsedN);

let M ;
do {
    M = prompt('Введіть значення M:','').trim();
} while (M === '' || isNaN (M) || M === null);
const parsedM = parseInt(M);
console.log (parsedM);

const skipEven = confirm('Пропустити парні числа?');
console.log(skipEven);
let sum = 0;
        for (i = parsedN; i <= parsedM; i ++) {
            if (skipEven && i % 2 === 0) {
                continue;
            }else {
                sum += i;    
    }
}
console.log(sum);
alert (`Сума показників: ${sum}`);