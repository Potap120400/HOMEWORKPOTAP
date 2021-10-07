let N;
do{
    N = +prompt("Введіть значення N", );
}while(!Number.isInteger(N));
console.log(N);

let M;
do{
    M = +prompt("Віедіть значення M", );
}while(!Number.isInteger(M) || M < N);
console.log(M);

const skip = confirm('Пропустити парні?');
console.log(skip);

let sumNumber = 0;
for (let i = N; i <= M; i++) {
    if (skip && i % 2 === 0) {
        sumNumber += i;
    } else {
        sumNumber += i;
    }

} console.log(sumNumber);
 alert (`Сума показників: ${sumNumber}`);
