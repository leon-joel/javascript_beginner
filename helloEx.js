// コメント:これらのコメントはクライアント側にそのまま送信される
/** コメント: 同上
 * コメント
 * コメント
 */
var msg = 'Hello, World ! \r\nHe\'s great!';
var x = 100;
document.writeln(msg);
document.writeln(x);
document.writeln(010);  // 8進数
document.writeln(0x10);  // 16進数

var ary = ['JavaScript', 'Ajax', 'ASP.NET'];
document.writeln(ary[0]);

var obj = { x:1, y:2, z:3 };
document.writeln(obj.x);
document.writeln(obj['x']);

//document.writeln(kkk);  // kkkはundefined。ここでエラーが発生し、以降は実行されない。

document.writeln('シフト演算子のテスト');
x = 10;
x <<= 1;
document.writeln(x);


