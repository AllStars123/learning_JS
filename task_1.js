
// С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10
// включительно, чтобы результат выглядел так:

for (let item = 0; item <= 10; item++){
    if (item === 0) {
        console.log(`${item} это ноль`);
    } else if ((item % 2) === 0){
        console.log(`${item} четное число`);
    } else {
        console.log(`${item} нечетное число`)
    }
}