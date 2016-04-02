document.writeln('クラス（プロトタイプ）の定義');
var Member = function (firstName, lastName) {
    // プロパティ
    this.firstName = firstName;
    this.lastName = lastName;

    // getNameメソッド
    this.getName = function () {
        return this.lastName + ' ' + this.firstName;
    }
};

// インスタンスの生成
var mem = new Member('太郎', '花田');
document.writeln(mem.getName());


// あとからメソッドを追加することも出来る
mem.getShortName = function () {
    return this.lastName + this.firstName;
};
document.writeln(mem.getShortName());

// 但し、後から追加したメソッドは別のインスタンスには実装されていない

var mem2 = new Member('花子', '一太郎');
//document.writeln(mem2.getShortName());      // エラー

// またdelete演算子でプロパティやメソッドを削除することも出来る
delete mem.getShortName

//document.writeln(mem.getShortName());       // エラー

document.writeln();
document.writeln();
