let N = parseInt(prompt('Введіть значення  N:'));
let M = parseInt(prompt('Введіть значення M:'));

let skipNumber = confirm('Пропустити парні числа?');
let result = 0;

for (let i = N; i <= M; i++) {
    if (skipNumber && !(i % 2)) {
        continue;
    }
    result += i;
}

alert(`Result: ${result}`);

document.writeln(`Сумма чисел: ${result}`);