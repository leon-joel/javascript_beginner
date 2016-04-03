document.writeln('クラス継承【Prototypeチェーン】');
document.writeln('');
var Animal = function () {};

Animal.prototype = {
    walk : function () {
        document.writeln('トコトコ…'); }
};

// 派生クラスの定義
var Dog = function () {};
Dog.prototype = new Animal();

Dog.prototype.bark = function () {
    document.writeln('ワンワン！');
};

document.writeln('基底クラス');
var a = new Animal();
a.walk();
// a.bark();    // これは基底クラスには定義されていない

document.writeln('派生クラス');
var d = new Dog();
d.walk();
d.bark();

// もう一つ継承
var Poodle = function () { };
Poodle.prototype = new Dog();

Poodle.prototype.bow = function () {
    document.writeln('ぷーーーー');
};

var p = new Poodle();
p.walk();
p.bark();
p.bow()