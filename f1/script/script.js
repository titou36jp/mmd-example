// 前回クリックされたli兄弟要素のグループの要素番号
var prevIndex = 1;

/**
 * iframeコンテンツ切替ボタン内 liのスタイルをセットする
 *
 * @param {number}} elnum li兄弟要素のグループの要素番号
 * @param {object}} styleObj cssのプロパティと値を有したオブジェクト
 */
function setStyle(elnum, styleObj) {
  //プロパティ名配列のサイズ取得
  var len = obj_prop_name.length;

  //繰返し処理
  for (var index = 0; index < len; index++) {
    //プロパティ名取得
    var objPropName = obj_prop_name[index];
    //プロパティ名に紐付くcssプロパティ名取得
    var cssProp = styleObj[objPropName][0];
    //プロパティ名に紐付くcssプロパティ値取得
    var cssPropVal = styleObj[objPropName][1];
    //css変更
    $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
      cssProp,
      cssPropVal
    );

    // debug
    // console.log(cssProp + ":" + cssPropVal);
  }
}

/**
 * iframeコンテンツ切替ボタン内 liのカーソルスタイルをセットする
 *
 * @param {object}} styleObj cssのプロパティと値を有したオブジェクト
 */
function setCursorStyle(styleObj) {
  //カーソルスタイルをセット
  var cssText = styleObj.cursor[0];
  $("body").css({ cssText });
}

/**
 * iframeコンテンツ切替ボタン内 liのスタイルをセットする
 *
 * @param {number}} elnum li兄弟要素のグループの要素番号
 * @param {object}} styleObj マウスホバーcssのプロパティと値を有したオブジェクト
 */
function setStyleWrapper(elnum, styleObj) {
  //iframeコンテンツ切替ボタン内 liのスタイルを初期化する
  setStyle(elnum, btn_styles.init_style);
  //iframeコンテンツ切替ボタン内 liのスタイルをセットする
  setStyle(elnum, styleObj);
}

/**
 * iframeコンテンツ切替
 *
 * @param {string}} loc ロケーション
 */
function changeLocation(loc) {
  document.getElementById("iframeId").contentWindow.location.replace(loc);
}

/**
 * iframe切替ボタン処理
 */
$(function () {
  //マウスホバーしたときのスタイルを指定
  $(".iframe-contents-change-button > li").on("mouseover", function () {
    //要素番号取得
    var elnum = $(".iframe-contents-change-button > li").index(this) + 1;
    //iframeコンテンツ切替ボタン内 liマウスホバー時のスタイルをセットする
    setStyleWrapper(elnum, btn_styles.hover_style);
  });

  //マウスアウトしたときに元のスタイルに戻る
  $(".iframe-contents-change-button > li").on("mouseout", function () {
    //要素番号取得
    var elnum = $(".iframe-contents-change-button > li").index(this) + 1;
    //iframeコンテンツ切替ボタン内 liのデフォルトスタイルをセットする
    if (prevIndex != elnum) {
      setStyleWrapper(elnum, btn_styles.default_style);
    }
  });

  //クリックイベント処理
  $(".iframe-contents-change-button > li").click(function () {
    //iframeコンテンツ切替ボタン内 liのカーソルスタイルを待ち時間にする
    setCursorStyle(cursor_styles.wait_style);

    //iframeコンテンツ切替ボタン内 liのデフォルトスタイルをセットする
    setStyleWrapper(prevIndex, btn_styles.default_style);

    //クリックされたli兄弟要素のグループの要素番号取得
    var index = $(".iframe-contents-change-button > li").index(this) + 1;
    if (prevIndex != index) {
      //前回クリックされたli兄弟要素のグループの要素番号設定
      prevIndex = index;
      //iframeコンテンツ切替
      changeLocation("./pages/page-" + prevIndex + ".html");
    }

    //iframeコンテンツ切替ボタン内 liマウスホバー時のスタイルをセットする
    setStyleWrapper(prevIndex, btn_styles.hover_style);

    //iframeコンテンツ切替ボタン内 liのカーソルスタイルをデフォルト(自動選択)にする
    setCursorStyle(cursor_styles.auto_style);
  });
});

/**
 * HTML（DOM）の読み込みが終わったタイミングで実行
 *
 * @author: equeko99
 */
$(document).ready(function () {
  //iframe切替ボタンの要素数取得
  var length = $(".iframe-contents-change-button > li").length + 1;

  //iframeコンテンツ切替ボタン内 全liのスタイルをデフォルトに設定する
  for (var elnum = 1; elnum < length; elnum++) {
    //iframeコンテンツ切替ボタン内 liのデフォルトスタイルをセットする
    setStyleWrapper(elnum, btn_styles.default_style);
  }

  //iframeコンテンツ切替ボタン内 liマウスホバー時のスタイルをセットする
  setStyleWrapper(prevIndex, btn_styles.hover_style);
  //iframeコンテンツ切替
  changeLocation("./pages/page-" + prevIndex + ".html");
});
