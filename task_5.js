// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических операций
// (использовать функции из задания 4) и вернуть полученное значение.

function addition(num_1, num_2) {
    return num_1 + num_2;
}

function subtraction(num_1, num_2) {
    return num_1 - num_2;
}

function multiplication(num_1, num_2) {
    return num_1 * num_2;
}

function division(num_1, num_2) {
    return num_1 / num_2;
}

function mathOperation(num_1, num_2, operation) {
    let result = undefined
    switch (operation) {
        case "+":
            result = addition(num_1, num_2)
            break
        case "-":
            result = subtraction(num_1, num_2)
            break
        case "/":
            result = division(num_1, num_2)
            break
        case "*":
            result = multiplication(num_1, num_2)
            break
        default:
            console.log('Вы ввели неверные параметры')
    }
    return result
}

let test = mathOperation(2, 2, "/")
console.log(test)
