/**
 * iframeコンテンツ切替
 *
 * @param {string}} loc ロケーション
 */
function changeLocation(loc) {
  document.getElementById("iframeId").contentWindow.location.replace(loc);
}

/**
 * iframe切替ボタンのスタイルをリセットする
 */
function resetStyle() {
  //1ページのiframe切替ボタンスタイル（フォントカラー、ぼかし効果）をリセット
  $(".iframe-contents-change-button > li:nth-child(1)").css("color", "white");
  $(".iframe-contents-change-button > li:nth-child(1)").css(
    "text-shadow",
    "1px 1px 1px rgba(10, 10, 10, 0.9)"
  );

  //2ページのiframe切替ボタンスタイル（フォントカラー、ぼかし効果）をリセット
  $(".iframe-contents-change-button > li:nth-child(2)").css("color", "white");
  $(".iframe-contents-change-button > li:nth-child(2)").css(
    "text-shadow",
    "1px 1px 1.5px rgba(10, 10, 10, 0.9)"
  );

  //3ページのiframe切替ボタンスタイル（フォントカラー、ぼかし効果）をリセット
  $(".iframe-contents-change-button > li:nth-child(3)").css("color", "white");
  $(".iframe-contents-change-button > li:nth-child(3)").css(
    "text-shadow",
    "1px 1px 1px rgba(10, 10, 10, 0.9)"
  );
}

/**
 * iframe切替ボタンのスタイルをセットする
 *
 * @param {number}} elnum li兄弟要素のグループの要素番号
 */
function setStyle(elnum) {
  //フォントカラー変更
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    "color",
    "black"
  );
  //ぼかし効果変更
  $(".iframe-contents-change-button > li:nth-child(" + elnum + ")").css(
    "text-shadow",
    "1px 1px 1px rgba(230, 230, 230, 0.9)"
  );
}

/**
 * メイン処理
 *
 * @param {string}} loc ロケーション
 * @param {number}} elnum li兄弟要素のグループの要素番号
 */
function mainProc(loc, elnum) {
  changeLocation(loc);
  resetStyle();
  setStyle(elnum);
}

/**
 * iframe切替ボタンクリック処理
 */
$(function () {
  //1ページ目をクリック
  $(".iframe-contents-change-button > li:nth-child(1)").click(function () {
    //メイン処理
    mainProc("./pages/page-1.html", 1);
  });

  //2ページ目をクリック
  $(".iframe-contents-change-button > li:nth-child(2)").click(function () {
    //メイン処理
    mainProc("./pages/page-2.html", 2);
  });

  //3ページ目をクリック
  $(".iframe-contents-change-button > li:nth-child(3)").click(function () {
    //メイン処理
    mainProc("./pages/page-3.html", 3);
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
});
