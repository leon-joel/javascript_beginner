document.writeln('クラスライクな継承（を実現するための仕組み）');

// 基底クラスのメソッドを派生クラスにコピーするメソッド
// ※派生クラスのコンストラクタから呼び出されることを想定している
function initializeBase(derive, base, baseArgs) {
    // 基底クラスのコンストラクタを呼び出す
    base.apply(derive, baseArgs);

    // 基底クラスのprototypeからメソッドを取り出し
    for (var prop in base.prototype) {
        // 自クラス（派生クラス）のプロトタイプに同名のメソッドがなければ
        var proto = derive.constructor.prototype;
        if(!proto[prop]){
            // 自クラス（派生クラス）のプロトタイプにメソッドをコピーする
            proto[prop] = base.prototype[prop];
        }
    }
}

// Memberクラスを定義
var Member = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Member.prototype.getName = function () {
    return this.lastName + ' ' + this.firstName;
}

var SpecialMember = function (firstName, lastName, role) {
    initializeBase(this, Member, [firstName, lastName]);
    this.role = role;
}

SpecialMember.prototype.isAdministrator = function () {
    return (this.role == 'Administrator');
}

var mem = new SpecialMember('Yuki', 'Yamada', 'Administrator');
document.writeln('名前: ' + mem.getName());
document.writeln('管理者: ' + mem.isAdministrator());


// 派生クラスで基底クラスのメソッドを利用するには
SpecialMember.prototype.getName = function () {
    // 基底クラスのメソッドを呼び出し
    var result = Member.prototype['getName'].apply(this, []);
    // roleを付け加える
    return result + '(' + this.role + ')';
};

var m2 = new SpecialMember('Tak', 'Matsumoto', 'Member');
document.writeln('名前: ' + m2.getName());
document.writeln('管理者: ' + m2.isAdministrator());

// 既存のインスタンスにもメソッドの変更が反映されている
document.writeln('名前: ' + mem.getName());
document.writeln('管理者: ' + mem.isAdministrator());