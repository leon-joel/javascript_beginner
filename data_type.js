document.writeln('Stringオブジェクト');
var str1 = 'にわにわにはにわとりがいる';
var str2 = 'Wingsプロジェクト';

document.writeln(' トップ'.anchor('top'));

document.writeln(str2.link('http://www.wings.msn.to'));

document.writeln();
document.writeln('Numberオブジェクト');

var num1 = 255;
document.writeln(num1.toString(16));    // 16進数で表現
document.writeln(num1.toString(8));     // 8進

var num2 = 123.45678;
document.writeln(num2.toExponential(2));    // 指数表記 引数は小数点以下桁数
document.writeln(num2.toFixed(3));          // 小数点以下桁数
document.writeln(num2.toFixed(7));
document.writeln(num2.toPrecision(10));     // 整数部も含む桁数
document.writeln(num2.toPrecision(6));

document.writeln('NaNはすべての値と等しくない');
document.writeln(Number.NaN == Number.NaN); // -> falseとなる

document.writeln();
document.writeln('Arrayオブジェクト');
var ary1 = [ 'Sato', 'Takae', 'Osada', 'Hio', 'Saitoh' ];
var ary2 = [ 'Yabuki', 'Aoki', 'Moriyama', 'Yamada' ];

document.writeln(ary1.concat(ary2));
document.writeln(ary1);         // ary1自体は変化無し
document.writeln(ary2);         // もちろんary2も

document.writeln(ary1.join(' / '));

document.writeln(ary1.slice(1));    // 1番目（Indexは0始まりなので2番目）以降の要素を抜き出し
document.writeln(ary1);             // もちろんary1は変化無し

document.writeln(ary1.slice(1, 2)); // 1～ 2-1 まで抜き出し

document.writeln('spliceの実験');
document.writeln(ary1.splice(1, 2));    // 1番目から2個削除 -> 削除された要素が返される
document.writeln(ary1);                 // 削除されている

document.writeln(ary1.splice(1, 2, 'aaa', 'Bbb'));  // 置き換え →置き換えられた要素が返される
document.writeln(ary1);                 // 置き換えられている

document.writeln(ary1.reverse());       // 反転
document.writeln(ary1);                 // 反転されている

document.writeln(ary1.sort());          // 文字列ソート
document.writeln(ary1);                 // そーとされている

document.writeln(ary1.length);          // 要素数
document.writeln(ary1.toString());      // 文字列化 ※writeln内部でtoStringが呼ばれているので、ここでは特に意味はないが。

var ary = [5, 25, 10];
document.writeln(ary.sort());           // やはり文字列としてソートされている！！！

ary.sort(function(x, y) { return x - y; }); // 数値ソートを（匿名）関数を使って実装する
document.writeln(ary);

document.writeln('Dateオブジェクト');
var d = new Date(2010, 11, 4, 23, 55, 30, 500);     // ★月は注意！0始まりのIndexで表すので、11＝12月 となる。
var d = new Date(2010, 12, 4, 23, 55, 30, 500);     // ★★★またまた注意！12にすると、翌年の1月として解釈される！！！
document.writeln('英語チックな表現 ※ブラウザによって表現が異なるので注意！');
document.writeln(d);    // 英語チックな表示になる

document.writeln('ローカル表現 ※ブラウザによって表現が異なるので注意！');
document.writeln(d.toLocaleString());
document.writeln(d.toLocaleDateString());
document.writeln(d.toLocaleTimeString());
