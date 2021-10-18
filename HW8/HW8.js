const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1
const getMyTaxes = function(salary) {
    return (this.tax * salary);
}
console.log( getMyTaxes.call(ukraine, 1000));

//2
const getMiddleTaxes = function() {
    return (this.tax * this.middleSalary);
}
console.log(getMiddleTaxes.call(ukraine));

//3
function getTotalTaxes(){
    return (this.middleSalary * this.tax*this.vacancies);
}
console.log(getTotalTaxes.call(ukraine));

// 4
const getMySalary = function() {
    const maxSalary = 2000;
    const minSalary = 1500;
    const result = {};
    result.salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
    result.taxes = result.salary * this.tax;
    result.profit = result.salary - this.tax * result.salary;
    return result;
}
setInterval(() => console.log(getMySalary.call(ukraine)), 10000);
