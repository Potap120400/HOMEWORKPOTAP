const getMaxDigit = (number) => { 
    if(number === 0){}
    else {
number = Math.max(getMaxDigit(number / 10),number % 10);
}
return number;
};


const Pow = (a, b) => {
    let res = a;
    for (let i = 1; i < b; i++) { 
    res *= a;
}
    return res;
};




const capLetter = (string) => {1
    if (!string) return string;
    return string[0].toUpperCase() + string.toLowerCase().slice(1);
};



const percent = (zp, tax) =>{
    tax = 20;
return zp - (zp * tax /100)
}




const randNumber = (x, y) => Math.floor((Math.random() * (y - x + 1)) + x);



const randPass = (number = 8) => {
    let result = "";
for (let i = 0; i < number; i++) {
      result += Math.round(Math.random() * 9);
}
return result;
};





document.writeln(`Найбільша цифра в числі: ${getMaxDigit(123456789)} <br>
Число в степені: ${Pow(3, 7)} <br>
З великої літери: ${capLetter("vano")} <br>
% від ЗП: ${percent (243, 20)} <br>
Випадкове число: ${randNumber (243, 20)} <br>
Випадковий пароль: ${randPass()}  `)







