$(window).load(function () {
  resetStyle();
  setStyle(1);
});

$(function () {
  //1ページ
  $(".iframe-contents-change-button > li:nth-child(1)").click(function () {
    document
      .getElementById("iframeId")
      .contentWindow.location.replace("./pages/page-1.html");
    resetStyle();
    setStyle(1);
  });

  //2ページ
  $(".iframe-contents-change-button > li:nth-child(2)").click(function () {
    document
      .getElementById("iframeId")
      .contentWindow.location.replace("./pages/page-2.html");
    resetStyle();
    setStyle(2);
  });

  //3ページ
  $(".iframe-contents-change-button > li:nth-child(3)").click(function () {
    document
      .getElementById("iframeId")
      .contentWindow.location.replace("./pages/page-3.html");
    resetStyle();
    setStyle(3);
  });
});

function resetStyle() {
  //1ページ
  $(".iframe-contents-change-button > li:nth-child(1)").css("color", "white");
  $(".iframe-contents-change-button > li:nth-child(1)").css(
    "text-shadow",
    "1px 1px 1px rgba(10, 10, 10, 0.9)"
  );

  //2ページ
  $(".iframe-contents-change-button > li:nth-child(2)").css("color", "white");
  $(".iframe-contents-change-button > li:nth-child(2)").css(
    "text-shadow",
    "1px 1px 1.5px rgba(10, 10, 10, 0.9)"
  );

  //3ページ
  $(".iframe-contents-change-button > li:nth-child(3)").css("color", "white");
  $(".iframe-contents-change-button > li:nth-child(3)").css(
    "text-shadow",
    "1px 1px 1.5px rgba(10, 10, 10, 0.9)"
  );
}

function setStyle(value) {
  $(".iframe-contents-change-button > li:nth-child(" + value + ")").css(
    "color",
    "black"
  );
  $(".iframe-contents-change-button > li:nth-child(" + value + ")").css(
    "text-shadow",
    "1px 1px 1.5px rgba(230, 230, 230, 0.9)"
  );
}
