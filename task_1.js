// (это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на
// вход число в диапазоне [0, 999],
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
// - единицы (в свойстве units)
// - десятки (в свойстве tens)
// - сотни (в свойстве hundereds)
// Например, для числа 45 мы должны получить следующий объект:
//     units: 5, //это единицы
//     tens: 4, //это десятки
//     hundreds: 0, //это сотни



let result = {
    units: null,
    tens: null,
    hundreds: null
}

function NumberIntoObject(num){
    if(num > 0 && num < 999){
        result.hundreds = Math.floor(num / 100);
        num = num % 100;
        result.tens = Math.floor(num / 10);
        result.units = num % 10;
    } else {
        console.log("число вне диапазона");
        return 0;
    }
}

NumberIntoObject(123);
console.log(result);