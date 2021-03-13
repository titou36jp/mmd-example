// 前回クリックされたli兄弟要素のグループの要素番号
var prevIndex;

/**
 * iframe切替ボタンのスタイルをリセットする
 *
 * @param {number}} elnum li兄弟要素のグループの要素番号
 */
function resetStyle(elnum) {
  //パディング
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    "padding",
    "0.2rem"
  );

  //ボーダー
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    "border",
    "none"
  );

  //前景色
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    "color",
    "white"
  );

  //背景色
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    "background-color",
    "red"
  );

  //ボックス：ぼかし効果変更
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    "box-shadow",
    "0.5px 0.5px 2px 2px rgba(255, 200, 200, 0.9) inset)"
  );

  //テキスト：ぼかし効果変更
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    "text-shadow",
    "1.5px 1.5px 2px rgba(32, 32, 32, 0.9)"
  );

  //背景
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    "background-image",
    "linear-gradient(to right, rgba(255, 128, 128, 0.6) 5%, rgba(255, 0, 0, 1) 90%"
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
    "padding",
    "0"
  );

  //ボーダー
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    "border",
    "0.2rem solid black"
  );

  //前景色
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    "color",
    "black"
  );

  //背景色
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    "background-color",
    "cornflowerblue"
  );

  //ボックス：ぼかし効果変更
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    "box-shadow",
    "0.5px 0.5px 2px 2px rgba(238, 240, 241, 0.9) inset"
  );

  //テキスト：ぼかし効果変更
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    "text-shadow",
    "1px 1px 1.5px rgba(255, 255, 255, 0.9)"
  );

  //背景
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    "background-image",
    "linear-gradient(to right, rgba(238, 240, 241, 0.6) 5%, rgba(100, 149, 237, 1) 90%"
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
  //メイン処理
  mainProc("./pages/page-1.html", 1);
  // クリックされたli兄弟要素のグループの要素番号
  prevIndex = 1;
});
