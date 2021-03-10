/**
 * iframe切替ボタンのスタイルをリセットする
 */
function resetStyle() {
  //iframe切替ボタンスタイル（フォントカラー、ぼかし効果）をリセット
  for (var i = 1; i < 6; i++) {
    //フォントカラー変更
    $(".iframe-contents-change-button > li:nth-child(" + i + ")").css(
      "color",
      "white"
    );
    //ぼかし効果変更
    $(".iframe-contents-change-button > li:nth-child(" + i + ")").css(
      "text-shadow",
      "1px 1px 1px rgba(10, 10, 10, 0.9)"
    );
  }
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
  //iframe切替ボタンのスタイルをリセットする
  resetStyle();
  //iframe切替ボタンのスタイルをセットする
  setStyle(elnum);
  //iframeコンテンツ切替
  changeLocation(loc);
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

  //4ページ目をクリック
  $(".iframe-contents-change-button > li:nth-child(4)").click(function () {
    //メイン処理
    mainProc("./pages/page-4.html", 4);
  });

  //5ページ目をクリック
  $(".iframe-contents-change-button > li:nth-child(5)").click(function () {
    //メイン処理
    mainProc("./pages/page-5.html", 5);
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
