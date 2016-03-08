var scope = "Global";

function getValue(){
    var scope = "Local";
    return scope;
}

document.writeln(getValue());   // -> Local
document.writeln(scope);        // -> Global


document.writeln();
document.writeln('varなし宣言はすべてGlobal変数！');
function getValue2(){
    scope = "Localのつもり"
    return scope;
}

document.writeln(getValue2());  // -> Localのつもり
document.writeln(scope);        // -> Localのつもり ※global変数の方が変更されている！


document.writeln();
document.writeln('ローカル変数の有効範囲は？');
var v1 = 'Global';
function getValue3(){
    document.writeln(v1);      // -> Undefined！！！ ※local変数v1がすでに有効だが、代入自体はまだ行われていないので undefined となる！！！
    var v1 = 'Local';
    return v1;
}
document.writeln(getValue3());  // -> Local
document.writeln(v1);           // -> Global

document.writeln();
document.writeln('仮引数のscope');
var value = 10;
function decrementValue(value){
    value--;
    return value;
}
document.writeln(decrementValue(100));  // -> 99
document.writeln(value);                // -> 10 ※引数には【値渡し】されているので、Globalの方は変更されない

document.writeln();
document.writeln('参照型の場合は参照渡し');
var value = [1, 2, 4, 8, 16];
function deleteElement(value){
    value.pop();
    return value;
}
document.writeln(deleteElement(value)); // -> [1, 2, 4, 8]
document.writeln(value);                // -> 同上 ※Globalの値が変化した


document.writeln();
document.writeln('ブロックスコープは存在しない！');
if (true){
    var i = 5;
}
document.writeln(i);    // -> 5


document.writeln();
document.writeln('関数リテラル/Functionコンストラクタにおけるスコープの違い');
var s = 'Global';

function checkScope(){
    var s = 'Local';

    var f_lit = function(){ return s; };
    document.writeln('関数リテラル: ' + f_lit());      // -> Local

    var f_con = new Function('return s;');
    document.writeln('コンストラクタ: ' + f_con());      // -> Global
}
checkScope();

document.writeln();
document.writeln('引数の数はチェックしない');
function showMessage(value){
    document.writeln(value);
}

showMessage();                      // -> undefined
showMessage('山田');                // -> 山田
showMessage('山田', '鈴木');        // -> 山田

document.writeln();
document.writeln('引数チェックの例');
function showMessage2(value){
    if (arguments.length != 1){
        throw new Error('引数の数が間違っています！: ' + arguments.length);
    }
    document.writeln(value);
}

try{
    showMessage2('山田', '鈴木');
}catch(e){
    window.alert(e.message);
}

document.writeln();
document.writeln('引数のデフォルト値の定義は自前で');
function triangle(base, height){
    if (base == undefined) { base = 1; }
    if (height == undefined){height = 1;}
    return base * height / 2;
}
document.writeln(triangle(5));  // -> 2.5 ※第2引数は（関数内で自前で定義した）デフォルト値1が使用された

document.writeln();
document.writeln('可変長引数の関数');

function sum(){
    var result = 0;
    for (var i=0; i < arguments.length; i++){
        var tmp = arguments[i];
        if (isNaN(tmp)){
            throw new Error('指定値が数値ではありません：' + tmp);
        }
        result += tmp;
    }
    return result;
}

try {
    document.writeln(sum(1, 3, 5, 7, 9));   // -> 25
}catch(e){
    window.alert(e.message);
}

document.writeln();
document.writeln('arguments.callerで自分自身を再帰呼び出し');

function factorial(n){
    if (n != 0) { return n * arguments.callee(n - 1); }
    // arguments.caller の部分は factorialと記述しても同じこと。
    // 但し、匿名関数の場合は arguments.calleeとしか書きようがない。

    return 1;
}
document.writeln(factorial(5));

document.writeln('匿名関数を再帰呼び出し');

var factorial_func = function(n){
    if (n != 0) { return n * arguments.callee(n - 1); }
    return 1;
}

document.writeln(factorial_func(6));
