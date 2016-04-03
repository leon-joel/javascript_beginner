document.writeln('プライベートメンバー');

// コンストラクタ関数
function Triangle() {
    // プライベートプロパティの定義
    // ※this.xxx ではなく、varで定義することでプライベートメンバー変数となる
    var _base;
    var _height;

    // プライベートメソッドの定義
    // ※this.xxx ではなく、varで定義することでプライベートメソッドとなる
    var _checkArgs = function (val) {
        return (!isNaN(val) && 0 < val);
    };

    // プライベートメンバーにアクセスするためのメソッド【特権メソッド】を定義
    // ここはthisで定義.
    this.setBase = function (base) {
        if(_checkArgs(base)){_base = base;}
    };
    this.setHeight = function (height) {
        if(_checkArgs(height)){_height = height;}
    };

    this.getBase = function () {
        return _base;
    };
    this.getHeight = function () {
        return _height;
    }
}

Triangle.prototype.getArea  =function () {
    return this.getBase() * this.getHeight() / 2;
};

var t = new Triangle();
t._base = 10;   // プライベートメンバーにアクセス出来ていない
t._height = 2;
document.writeln('三角形の面積: ' + t.getArea());     // -> NaN

t.setBase(10);
t.setHeight(2);
document.writeln('三角形の底辺: ' + t.getBase());
document.writeln('三角形の高さ: ' + t.getHeight());
document.writeln('三角形の面積: ' + t.getArea());