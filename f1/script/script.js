$(function () {
  //1ページ
  $(".page-1-btn").click(function () {
    document
      .getElementById("iframeId")
      .contentWindow.location.replace("./pages/page-1.html");
  });

  //2ページ
  $(".page-2-btn").click(function () {
    document
      .getElementById("iframeId")
      .contentWindow.location.replace("./pages/page-2.html");
  });

  //3ページ
  $(".page-3-btn").click(function () {
    document
      .getElementById("iframeId")
      .contentWindow.location.replace("./pages/page-3.html");
  });
});
