// 前回クリックされたli兄弟要素のグループの要素番号
var prevIndex = 1;

/**
 * iframeコンテンツ切替ボタン内 liのスタイルをセットする
 *
 * @param {number}} elnum li兄弟要素のグループの要素番号
 * @param {object}} styleObj cssのプロパティと値を有したオブジェクト
 */
function setStyle(elnum, styleObj) {
  //パディング
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styleObj.padding[0],
    styleObj.padding[1]
  );

  //ボーダー
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styleObj.border[0],
    styleObj.border[1]
  );

  //前景色
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styleObj.color[0],
    styleObj.color[1]
  );

  //背景色
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styleObj.background_color[0],
    styleObj.background_color[1]
  );

  //ボックス：ぼかし効果変更
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styleObj.box_shadow[0],
    styleObj.box_shadow[1]
  );

  //テキスト：ぼかし効果変更
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styleObj.text_shadow[0],
    styleObj.text_shadow[1]
  );

  //背景グラデーションの向き(左から右)
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styleObj.background_image[0],
    styleObj.background_image[1]
  );
}

/**
 * iframeコンテンツ切替ボタン内 liのカーソルスタイルをセットする
 *
 * @param {object}} styleObj cssのプロパティと値を有したオブジェクト
 */
function setCursorStyle(styleObj) {
  //背景グラデーションの向き(左から右)
  $("body").css(styleObj.cursor[0], styleObj.cursor[1]);
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
