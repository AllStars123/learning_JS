// (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
// видео -> 3 примеры наследования -> механика наследования),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
// типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
// помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
// свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
// highlighted значение true.


class Post {
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text){
        this.text = text;
    }
}

let message = new Post ('Nikita', 'Privet', '29-09-2021');
console.log(message);
message.edit('123');
console.log(message);

class AttachedPost extends Post {
    constructor(author, text, date, highlighted){
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighLight (){
        this.highlighted = true;
    }
}

let attached = new AttachedPost ('Anna', 'Privet', '30-09-2021')
console.log(attached)
attached.makeTextHighLight();
attached.edit("1234");
console.log(attached);