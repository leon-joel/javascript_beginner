// イベントリスナーの登録 ※イベントハンドラーと違い、複数のリスナーを1つのイベントに登録でき、かつ削除も出来る。
function addListener(elem, ev, listener) {
  if (elem.addEventListener) {
    // IE9以降＋その他
    elem.addEventListener(ev, listener, false);
  } else if (elem.attachEvent) {
    // IE8以前
    elem.attachEvent('on' + ev, listener);
  } else {
    throw new Error(' イベントリスナーに未対応です')
  }
}

// イベントリスナーの削除
function removeListener(elem, ev, listener) {
  if (elem.removeEventListener) {
    elem.removeEventListener(ev, listener, false);
  } else if (elem.detachEvent) {
    elem.detachEvent('on' + ev, listener);
  } else {
    throw new Error(' イベントリスナーに未対応です')
  }
}

