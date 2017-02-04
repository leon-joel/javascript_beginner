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


document.writeln('四則演算');
x = 250;
y = 100;
d = x / y;
document.writeln(d);    // -> 2.5 ★小数になる！

d2 = Math.floor(x / y);
document.writeln(d2);   // -> 2 ★整数の商を求めるなら Math.floorしないといけないらしい。



document.writeln('シフト演算子のテスト');
x = 10;
x <<= 1;    // 1bitシフト＝2倍
document.writeln(x);

x = 9;
x <<= 1;
document.writeln(x);

x = 10;
x >>>= 2;       // 2bitシフト。
document.writeln(x);    // 最下位ビットが消えるので2になる

document.writeln('基本型と参照型');
var x = 1;
var y = x;
x = 2;
document.writeln(y);    // 基本型なので、y は 1のまま。

var ary1 = [0, 1, 2];
var ary2 = ary1;
ary1[0] = 5;
document.writeln(ary2[0]);  // 配列は参照型なので、ary2 は ary1 への参照である。したがって 5 になる。

document.writeln('比較演算子');

var ary3 = ['JavaScript', 'Ajax', 'ASP.NET'];
var ary4 = ['JavaScript', 'Ajax', 'ASP.NET'];

document.writeln('等値演算子==');
document.writeln(1 == true);    // -> true ★等値演算子は型変換してなんとか等しいと見なせないかと頑張ってくれる
document.writeln(5 == '5');     // -> true ★等値演算子は型変換してなんとか等しいと見なせないかと頑張ってくれる
document.writeln(5 == '５');    // -> false ★さすがに全角と半角はfalse

document.writeln('3.14E2' == 314);  // -> true ★等値演算子は型変換してなんとか等しいと見なせないかと頑張ってくれる
document.writeln('0x10' == 16);     // -> true ★同上


document.writeln('参照型の比較');
document.writeln(ary3 == ary4); // 参照型はRefferenceEqual?かどうかで比較されるので、値が同じでも違うインスタンスならfalseとなる

document.writeln('同値演算子===');
document.writeln(1 === true);    // -> false ★型が違う時点でfalse確定
document.writeln(5 === '5');     // -> false ★同上

document.writeln('3.14E2' === 314);  // -> false ★同上
document.writeln('0x10' === 16);     // -> false ★同上

document.writeln(ary3 === ary4); // -> false


document.writeln('条件演算子?:');
x = 80;
document.writeln((70 <= x ? '合格' : '不合格'));

document.writeln('delete演算子');
document.writeln(ary1); // -> [5, 1, 2]
delete ary1[0];
document.writeln(ary1); // -> [ , 1, 2] ★繰り上がりはしない

document.writeln(obj);  // -> [object Object]
document.writeln(delete obj.x); // -> true
document.writeln(obj.x);  // -> undefined

document.writeln(obj);  // -> [object Object] ★ここは変わらない
var obj2 = { x:obj, y:2, z:3 };
document.writeln(obj2); // -> [object Object]
document.writeln(delete obj2.x);    // -> true
document.writeln(obj2); // -> [object Object]
document.writeln(obj);  // -> [object Object] ★つまり、プロパティは削除されるが、プロパティが参照するオブジェクト自体は削除されない

document.writeln('変数のdelete');
var data1 = 1;
document.writeln(delete data1); // -> false ★明示的に宣言した変数はdeleteできない
document.writeln(data1);        // -> 1
data2 = 2;
document.writeln(delete data2); // -> true ※削除できる
//document.writeln(data2);        // エラー

document.writeln('typeof 演算子');
var num = 1;
document.writeln(typeof num);   // -> number
var str = 'こんにちは';
document.writeln(typeof str);   // -> string
var flag = true;
document.writeln(typeof flag);  // -> boolean
document.writeln(typeof ary1);  // -> object
document.writeln(typeof obj);   // -> object
