const chiken = 15.678;
const beef = 123.965;
const bacon = 90.2345;
console.log(Math.max(chiken, beef, bacon));
console.log(Math.min(chiken, beef, bacon));
let sum = (chiken + beef + bacon);
console.log(sum);
console.log(Math.floor(chiken) + Math.floor(beef) + Math.floor(bacon));
console.log(Math.round(sum / 100) * 100);
console.log(Math.floor(sum) % 2 == 0);
console.log(500 - sum);
console.log((sum / 3).toFixed(2));
let sale = Math.floor(Math.random() * 101);
console.log(sale)
let priceSale = (sum) - ((sum * sale) / 100);
console.log((priceSale).toFixed(2));
let navar = (sum / 2) - ((sum * sale) / 100);
console.log((navar).toFixed(2));
document.writeln(`<i>Максимальна ціна = ${Math.max(chiken,beef,bacon)} <br>
Мінімальна ціна = ${Math.min(chiken,beef,bacon)} <br>
Загальна  вартість = ${sum} <br>
Сума без копійок = ${Math.floor(chiken)+Math.floor(beef)+Math.floor(bacon)} <br>
Сума округлена до сотень = ${Math.round(sum /100)*100} <br>
Парне чи не парне = ${Math.floor(sum) %2 == 0} <br>
Решта від 500 = ${500-sum} <br>
Cереднє значення цін, округлене до другого знаку після коми = ${(sum/3).toFixed(2)} <br>
Випадкова знижка = ${sale} <br>
Сума зі скиидкою = ${(priceSale).toFixed(2)} <br>
Чистий прибуток = ${(navar).toFixed(2)} <br>
`);