// (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
// видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
// и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
// make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
// make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
// объект-прототип (как объект transport в уроке).

function Product_1(name_1, price_1){
    this.name = name_1;
    this.price = price_1;
}

Product_1.prototype.Discount = function () {
    this.price = this.price - (this.price * 25 / 100);
};

const notebook = new Product_1('MacBook', 200000);
notebook.Discount();
console.log(notebook);