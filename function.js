document.writeln('function命令で定義');
function triangle(base, height){
    return base * height / 2;

    // 注意！returnの後ろを改行すると、return; と解釈されるため、undefinedが返される！
    //return
    //base * height / 2;

}
document.writeln('三角形の面積: ' + triangle(5, 2));


document.writeln();
document.writeln('Functionコンストラクタ経由で定義 ※濫用禁止');
var triangleFunc = new Function('base', 'height', 'return base * height / 2;');
document.writeln('三角形の面積: ' + triangleFunc(6, 3));

document.writeln();
document.writeln('Functionコンストラクタ経由で定義2 (new はなくてもよい）  ※濫用禁止');
var triangleFunc2 = Function('base, height', 'return base * height / 2;');  // 引数定義を1つにまとめられる
document.writeln('三角形の面積: ' + triangleFunc2(7, 3));

document.writeln();
document.writeln('関数リテラルで定義（匿名メソッド）');
var triangleLiteral = function(base, height) {
    return base * height / 2;
}
document.writeln('三角形の面積: ' + triangleLiteral(9, 3));


document.writeln();
document.writeln('関数はデータ型の一種');
document.writeln(typeof triangle);  // -> function
document.writeln();
document.writeln(triangle); // -> 関数定義がそのまま出力される! ※function.toString()が呼び出されている！

document.writeln();
document.writeln('function命令は静的な構造を宣言する');
document.writeln('関数定義の前に呼び出し->正しく実行される: ' + testFunc(1));
document.writeln('但し、関数定義は、「呼び出し側のscriptブロックと同じ」か「前のscriptブロック」に配置しないといけない！');
function testFunc(arg){
    return arg * 2;
}


document.writeln('関数リテラル/Functionコンストラクタは実行時（＝代入時）に評価される');
document.writeln('関数定義の前に呼び出し⇒error: ' + f2(1));    // 実行時エラー
var f2 = function(arg){
    return arg * 2;
}
