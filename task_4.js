// Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
// и возвращать результат.
// Обязательно использовать оператор return

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


a = addition(2, 2); // 4
b = subtraction(10, 4); // 6
c = multiplication(3, 10);  // 30
d = division(12, 3); // 4
