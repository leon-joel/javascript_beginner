document.writeln('Object');
var obj = new Object();
document.writeln(obj.toString());
document.writeln(obj.valueOf());

document.writeln('Date');
obj = new Date();
document.writeln(obj.toString());
document.writeln(obj.valueOf());

document.writeln('Array');
obj = ['prototype.js', 'jQuery', 'Yahoo! UI'];
document.writeln(obj.toString());
document.writeln(obj.valueOf());

document.writeln('Number');
obj = 10;
document.writeln(obj.toString());
document.writeln(obj.valueOf());

document.writeln('RegExp');
obj = /[0-9]{3}-[0-9]{4}/g;
document.writeln(obj.toString());
document.writeln(obj.valueOf());


document.writeln('constructor');
var data = [];
if (typeof data == 'object' && data.constructor == Array){
    document.writeln('変数dataはArrayオブジェクトのインスタンスです。');
}

document.writeln('instanceof');
if (typeof data == 'object' && data instanceof Array){
    document.writeln('変数dataはArrayオブジェクトのインスタンスです。');
}

document.writeln('匿名オブジェクト');
var obj = new Object();
obj.name = '徳治郎';
obj.birth = new Date(2005, 7, 15);
obj.old = 5;
document.writeln(obj.name);

document.writeln('オブジェクトリテラル記法でも同じものが出来る');
var obj = { name: 'トクジロウ', birth: new Date(2005, 7, 14), old: 3};
document.writeln(obj.name);

document.writeln();
document.writeln('Globalオブジェクト');
document.writeln('123xxx');
var n = '123xxx';
document.writeln(Number(n));      // -> NaN
document.writeln(new Number(n));  // -> NaN ※上と同じ意味
document.writeln(parseFloat(n));  // -> 123
document.writeln(parseInt(n));    // -> 123

document.writeln('Date()');
n = new Date();
document.writeln(Number(n));      // -> 1457151586247
document.writeln(parseFloat(n));  // -> NaN
document.writeln(parseInt(n));    // -> NaN

document.writeln('0777');
n = '0777';
document.writeln(Number(n));      // -> 777
document.writeln(parseFloat(n));  // -> 777
document.writeln(parseInt(n));    // -> 777 ※本には511を返すと書いてあるが…

document.writeln('1.01e+2');
n = '1.01e+2';
document.writeln(Number(n));      // -> 101 ※指数表現を正しく認識している
document.writeln(parseFloat(n));  // -> 101 ※同上
document.writeln(parseInt(n));    // -> 1   ※e以降は無視

document.writeln(typeof(123 + ''));     // +演算子は片方が文字列ならもう一方も文字列として連結する
document.writeln(typeof('123' - 0));    // -演算子は片方が数値ならもう片方も数値に変換して減算する


document.writeln('Encode');
var enc = '!"#$%&()+-*/@~_|;:,.';
var eu = encodeURI(enc);
document.writeln(eu);
var euc = encodeURIComponent(enc);
document.writeln(euc);

document.writeln('Decode');
document.writeln(decodeURI(eu));
document.writeln(decodeURIComponent(euc));

document.writeln('eval関数');
var al = 'window.alert("eval 関数")';
eval(al);