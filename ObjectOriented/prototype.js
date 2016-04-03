document.writeln('プロトタイプオブジェクトの定義');
var Member = function (firstName, lastName) {
    // プロパティ
    this.firstName = firstName;
    this.lastName = lastName;
};

// getNameメソッド
Member.prototype.getName = function () {
    return this.lastName + ' ' + this.firstName;
}


// インスタンスの生成
var mem = new Member('太郎', '花田');
document.writeln(mem.getName());


// getNameメソッドを新しい実装に差し替え
Member.prototype.getName = function () {
    return 'New:' + this.lastName + ' ' + this.firstName;
}

// 既存オブジェクトを新しい実装を参照している
document.writeln(mem.getName());

document.writeln();
document.writeln('プロパティの削除');
Member.prototype.sex = '男';

var mem1 = new Member();
var mem2 = new Member();
document.writeln(mem1.sex + '|' + mem2.sex);    // -> 男 男
mem2.sex = '女';
document.writeln(mem1.sex + '|' + mem2.sex);    // -> 男 女
delete mem1.sex;
delete mem2.sex;
document.writeln(mem1.sex + '|' + mem2.sex);    // -> 男 男  ※男（デフォルト値）に戻る
                                                //             静的プロパティ自体は削除されないことが分かる。

document.writeln('こうやれば静的プロパティを削除できる');
delete Member.prototype.sex;
document.writeln(mem1.sex + '|' + mem2.sex);    // -> U  U

document.writeln('プロトタイプのリテラル表現');
document.writeln('こちらの方が簡潔で読みやすいのでなるべくこちらを使用する');

Member.prototype = {
    getName2 : function () { return this.lastName + ' ' + this.firstName; },
    toString2 : function () { return this.lastName + this.firstName; }
};

// 注意！ここでmem3を作らず、既存のmem1, mem2 からgetName2, toString2にアクセスしようとすると、
//       functionが見つからないというエラーが発生する。
//       JavaScriptのプロトタイプ”チェーン”はインスタンス生成時に確定するから。

var mem3 = new Member('Taro', 'Kimura')
document.writeln(mem3.getName2());
document.writeln(mem3.toString2());




document.writeln();
document.writeln("スタティックプロパティ・スタティックメソッド");

var Area = function () {};

Area.version = '1.0';   // 静的プロパティ

// 静的メソッドの定義
Area.triangle = function (base, height) {
    return base * height / 2;
}

Area.diamond = function (width, height) {
    return width * height / 2;
}

document.writeln('Areaクラスのバージョン: ' + Area.version );
document.writeln('三角形の面積: ' + Area.triangle(5, 3));

var a = new Area();
// document.writeln('菱形の面積: ' + a.diamond(10, 2)); // エラー
document.writeln('菱形の面積: ' + Area.diamond(10, 2));