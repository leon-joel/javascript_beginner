var x = 13;
if (20 <= x) {
    document.writeln('変数は20以上です。');
}else if (15 <= x){
    document.writeln('変数は15以上です。');
}else{
    document.writeln('変数は15未満です。');
}

document.writeln();
document.writeln('switch命令');
var rank = 'D';
switch (rank){
    case 'A':
        document.writeln('Aランクです');
        break;
    case 'B':
        document.writeln('Bランクです');
        break;
    case 'C':
        document.writeln('Cランクです');
        break;
    default:
        document.writeln('ランク外です');
}

document.writeln();
document.writeln('while命令');
var x = 8;
while (x < 10){
    document.writeln('Xの値は' + x);
    x++;
}

document.writeln('do-while命令');

x = 8;
do {
    document.writeln('Xの値は' + x);
    x++;
} while (x < 10);

document.writeln('for命令');
for (var x = 8; x < 10; x++ ) {
    document.writeln('Xの値は' + x);
}

document.writeln('for命令: 初期化変数を2つに');
for (var i = 1, j = 1; i < 5; i++, j++){
    document.writeln('i * j は' + i * j);
}

document.writeln('for-in命令');
var member = ['山田', '鈴木', '佐藤'];
for (var i in member){
    // ★配列の場合、j にはインデックス（番号）が取り出される！for-inのメリットがない…
    // →通常はfor-inで配列の中身を取り出すことはしないらしい。
    document.writeln('名前は' + member[i]);
}

document.writeln('object（ハッシュ）の for-in命令');
var triangle = {width:30, height:50};
for (var j in triangle){
    // j にはハッシュキーが格納されてくる
    document.writeln(j + '=' + triangle[j]);
}

document.writeln('object（プロパティを個別にセット）の for-in命令');
var book = new Object();
book.title = 'JavaScript 本格入門';
book.publish = '技術評論社';
book.price = '3000';
for (var k in book){
    // k にはプロパティ名が格納されてくる ★実体としてはハッシュと同じものなのかな
    document.writeln(k + 'は' + book[k]);
}

document.writeln('break命令');
var result = 0;
for (var i = 0; i <= 100; i++){
    result += i;
    if (1000 < result) { break; }
}
document.writeln('合計値が1000をこえるのは' + i);

document.writeln('continue命令');
result = 0;
for (var i = 0; i < 100; i++){
    if (i % 2 == 0){continue;}
    result += i;
}
document.writeln('奇数だけの合計は' + result);

document.writeln();
document.writeln('積が30以下の九九表を作成');
document.writeln('break命令は一番内側のループのみから脱出する');
for (var i = 1; i < 10; i++){
    for (var j = 1; j < 10; j++){
        var k = i * j;
        if (30 < k) { break; }
        //document.write(k + '&nbsp;');
        document.write(k + ' ');    // これも↑と同じ結果になるが、&nbsp; を使う理由はなんだろう？？？
    }
    document.write('<br/>');
}

document.writeln();
document.writeln('一度でも積が30をこえたら表の作成を終了する');
document.writeln('label構文ですべてのループから脱出');
kuku:
    for (var i = 1; i < 10; i++){
        for (var j = 1; j < 10; j++){
            var k = i * j;
            if (30 < k) { break kuku; }     // ★kukuラベルのついたループを脱出する！cやc++のラベルとは使い方が違うので要注意！
            //document.write(k + '&nbsp;');
            document.write(k + ' ');    // これも↑と同じ結果になるが、&nbsp; を使う理由はなんだろう？？？
        }
        document.write('<br/>');
    }

document.writeln();
document.writeln('try-catch-finally命令');
try{
    i = i * undef_var;  //  例外が発生する
}catch (e){
    document.writeln(e.message);
}finally {
    document.writeln('処理は完了しました。');
}

document.writeln('例外をthrowする');
var x = 1, y = 0;
try{
    if (y == 0) { throw new Error('0で除算しようとしました。')}
    var z = x / y;
}catch(e){
    document.writeln(e.message);
}