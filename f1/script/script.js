// 前回クリックされたli兄弟要素のグループの要素番号
var prevIndex = 1;

/**
 * iframe切替ボタンのスタイルをリセットする
 *
 * @param {number}} elnum li兄弟要素のグループの要素番号
 */
function resetStyle(elnum) {
  //パディング
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styles.default_style.padding[0],
    styles.default_style.padding[1]
  );

  //ボーダー
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styles.default_style.border[0],
    styles.default_style.border[1]
  );

  //前景色
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styles.default_style.color[0],
    styles.default_style.color[1]
  );

  //背景色
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styles.default_style.background_color[0],
    styles.default_style.background_color[1]
  );

  //ボックス：ぼかし効果変更
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styles.default_style.box_shadow[0],
    styles.default_style.box_shadow[1]
  );

  //テキスト：ぼかし効果変更
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styles.default_style.text_shadow[0],
    styles.default_style.text_shadow[1]
  );

  //背景グラデーションの向き(左から右)
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styles.default_style.background_image[0],
    styles.default_style.background_image[1]
  );
}

/**
 * iframe切替ボタンのスタイルをセットする
 *
 * @param {number}} elnum li兄弟要素のグループの要素番号
 */
function setStyle(elnum) {
  //パディング
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styles.hover_style.padding[0],
    styles.hover_style.padding[1]
  );

  //ボーダー
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styles.hover_style.border[0],
    styles.hover_style.border[1]
  );

  //前景色
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styles.hover_style.color[0],
    styles.hover_style.color[1]
  );

  //背景色
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styles.hover_style.background_color[0],
    styles.hover_style.background_color[1]
  );

  //ボックス：ぼかし効果変更
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styles.hover_style.box_shadow[0],
    styles.hover_style.box_shadow[1]
  );

  //テキスト：ぼかし効果変更
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styles.hover_style.text_shadow[0],
    styles.hover_style.text_shadow[1]
  );

  //背景グラデーションの向き(左から右)
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    styles.hover_style.background_image[0],
    styles.hover_style.background_image[1]
  );
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
 * メイン処理
 *
 * @param {string}} loc ロケーション
 * @param {number}} elnum li兄弟要素のグループの要素番号
 */
function mainProc(loc, elnum) {
  //iframe切替ボタンのスタイルをセットする
  setStyle(elnum);
  //iframeコンテンツ切替
  changeLocation(loc);
}

/**
 * iframe切替ボタン処理
 */
$(function () {
  //マウスオーバーしたときのスタイルを指定
  $(".iframe-contents-change-button > li").on("mouseover", function () {
    //要素番号取得
    var elnum = $(".iframe-contents-change-button > li").index(this) + 1;
    //iframe切替ボタンのスタイルをセットする
    setStyle(elnum);
  });

  //マウスアウトしたときに元のスタイルに戻る
  $(".iframe-contents-change-button > li").on("mouseout", function () {
    //要素番号取得
    var elnum = $(".iframe-contents-change-button > li").index(this) + 1;
    //iframe切替ボタンのスタイルをリセットする
    if (prevIndex != elnum) {
      resetStyle(elnum);
    }
  });

  //クリックイベント処理
  $(".iframe-contents-change-button > li").click(function () {
    //iframe切替ボタンのスタイルをリセットする
    resetStyle(prevIndex);
    //前回クリックされたli兄弟要素のグループの要素番号取得
    prevIndex = $(".iframe-contents-change-button > li").index(this) + 1;
    //メイン処理
    mainProc("./pages/page-" + prevIndex + ".html", prevIndex);
  });
});

/**
 * 画像など含めすべてのコンテンツの読み込みが終わるタイミングで実行
 *
 * @author: equeko99
 */
$(window).load(function () {
  //iframe切替ボタンの要素数取得
  var length = $(".iframe-contents-change-button > li").length + 1;
  for (var elnum = 1; elnum < length; elnum++) {
    //iframe切替ボタンのスタイルをリセットする
    resetStyle(elnum);
  }

  //iframe切替ボタンのスタイルをセットする
  setStyle(prevIndex);
  //iframeコンテンツ切替
  changeLocation("./pages/page-" + prevIndex + ".html");
});
