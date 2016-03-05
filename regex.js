var p = new RegExp('http(s)?://([\\w-]+\\.)+[\\w-]+(/[\\w -./?%&=]*)?', 'gi');
//var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w -.\/?%&=]*)?/gi;  // \w の後ろに - を持ってくるとRangeと解釈されてエラーになる

var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！';
var result = str.match(p);

document.writeln('giの場合');
for (var i = 0; i < result.length; i++){
    document.writeln(result[i]);
}

document.writeln();
document.writeln('iの場合 → gを外したので一つマッチしたところで終了～ となる');
document.writeln('          この場合、マッチ文字列全体とサブマッチ文字列を配列として返す。');
p = new RegExp('http(s)?://([\\w-]+\\.)+[\\w-]+(/[\\w -./?%&=]*)?', 'i');
result = str.match(p);
for (var i = 0; i < result.length; i++){
    document.writeln(result[i]);
}

document.writeln();
document.writeln('RegExp.execの実験 ※注意！gオプションを外すと無限ループに入る！');
var reg_url = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w -.\/?%&=]*)?/gi;  // \w の後ろに - を持ってくるとRangeと解釈されてエラーになる
while ((result = reg_url.exec(str)) != null) {
    document.writeln('leftContext  : ' + RegExp.leftContext);
    document.writeln(reg_url.lastIndex + ' : ' + result[0]);
    document.writeln('rightContext : ' + RegExp.rightContext);
    document.writeln('lastMatch    : ' + RegExp.lastMatch);
    document.writeln('lastParen    : ' + RegExp.lastParen);
    document.writeln('$1           : ' + RegExp.$1);
    document.writeln('$2           : ' + RegExp.$2);
    document.writeln('$3           : ' + RegExp.$3);
    document.writeln('<ht />');
}



document.writeln();
document.writeln('まずはm(multiline)をOFFで →この場合 ^ は文字列先頭にマッチする');
p = /^[0-9]{1,}/g;
str = '101匹ワンちゃん。\n7人の小人';
result = str.match(p);

for (var i = 0; i < result.length; i++){
    document.writeln(result[i]);
}

document.writeln('次に m(multiline)をONで → ^ は行頭位置にマッチする');
p = /^[0-9]{1,}/gm;
str = '101匹ワンちゃん。\n7人の小人';
result = str.match(p);

for (var i = 0; i < result.length; i++){
    document.writeln(result[i]);
}

document.writeln('マッチングの成否のみ');
var str1 = 'サポートサイトはhttp://www.wings.msn.to/です。';
var str2 = 'サポートサイト「サーバーサイド技術の学び舎」をよろしく！';
document.writeln(reg_url.test(str1)); // -> true
document.writeln(reg_url.test(str2)); // -> false

document.writeln(str1.search(reg_url)); // -> 8
document.writeln(str2.search(reg_url)); // -> -1

document.writeln('置換');
var r2 = /(http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w -.\/?%&=]*)?)/gi;  // \w の後ろに - を持ってくるとRangeと解釈されてエラーになる
document.writeln(str1.replace(r2, '<a href="$1">$1</a>'));

document.writeln('分割');
var r3 = /[\/\.\-]/gi;
document.writeln('2010/12/04'.split(r3));
document.writeln('2010-12-04'.split(r3));
document.writeln('2010.12-04'.split(r3));
