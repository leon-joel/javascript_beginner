document.writeln('名前付きで引数を指定');

function triangle2(args){
    if (args.base == undefined) { args.base = 1; }
    if (args.height == undefined) { args.height = 1; }
    return args.base * args.height / 2;
}

document.writeln(triangle2({base:5, height:4}));


document.writeln();
document.writeln('高階関数');

function arrayWalk(data, f){
    for (var key in data){
        // key は data（配列）のindex
        // data[key] が要素
        f(key, data[key]);
    }
}

function showElement(key, value){
    document.writeln(key + ' : ' + value);
}

var ary = [ 1, 2, 4, 8, 16 ];
arrayWalk(ary, showElement);

document.writeln('合計値を計算する関数に差し替える');
var result = 0;
function sumElement(key, value){
    result += value;
}

arrayWalk(ary, sumElement);
document.writeln('合計値: ' + result);

document.writeln();
document.writeln('匿名関数を渡す');
arrayWalk(
    ary,
    function (key, value) {
        document.writeln(key + '-' + value);
    }
);


document.writeln();
document.writeln('スコープチェーン');
// 一番外側のスコープチェーン（Callオブジェクト＝Globalオブジェクト≒Rubyにおけるトップレベルに相当）
var y = 'Global';

// 真ん中のスコープチェーン（Callオブジェクト）
function outerFunc(){
    var y = 'Local outer';

    // 一番内側のスコープチェーン（Callオブジェクト）
    function innerFunc(){
        var y = 'Local Inner';

        document.writeln(y);        // -> Local Inner
        //document.writeln(x);      // エラー x は未定義
    }
    innerFunc();
    document.writeln(y);            // -> Local outer
}
outerFunc();
document.writeln(y);                // -> Global

document.writeln();
document.writeln('クロージャ');

function closure(init){
    var counter = init;     // 初期値

    return function () {    // functionを返す ※counterがinitで初期化されている
        return ++counter;
    }
}

document.writeln();
document.writeln('クロージャ2');

function closure2(init){
    var counter = init;

    return function () {
        return ++counter;
    }
}

var myClosure1 = closure2(1);
var myClosure100 = closure2(100);
document.writeln(myClosure1());     // -> 2
document.writeln(myClosure100());   // -> 101
document.writeln(myClosure1());     // -> 3
document.writeln(myClosure100());   // -> 102
