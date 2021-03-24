// 前回クリックされたli兄弟要素のグループの要素番号
var prevIndex = 1;

// iframeコンテンツ切替ボタン内用オブジェクトのプロパティ名配列
var obj_prop_name = [
  //パディング
  "padding",
  //ボーダー
  "border",
  //前景色
  "color",
  //背景色
  "background_color",
  //ボックスぼかし効果
  "box_shadow",
  //テキストぼかし効果
  "text_shadow",
  //背景グラデーション
  "background_image",
  //アニメーションが完了するまでの所要時間
  "transition",
];

// iframeコンテンツ切替ボタン内 liのスタイル定義
var btn_styles = {
  // iframeコンテンツ切替ボタン内 liのスタイル初期化
  init_style: {
    //パディング
    padding: ["padding", ""],
    //ボーダー
    border: ["border", ""],
    //前景色
    color: ["color", ""],
    //背景色
    background_color: ["background-color", ""],
    //ボックス：ぼかし効果変更
    box_shadow: ["box-shadow", ""],
    //テキスト：ぼかし効果変更
    text_shadow: ["text-shadow", ""],
    //背景グラデーションの向き(左から右)
    background_image: ["background-image", ""],
    //アニメーションが完了するまでの所要時間
    transition: ["transition", ""],
  },
  // iframeコンテンツ切替ボタン内 liのデフォルトスタイル定義
  default_style: {
    //パディング
    padding: ["padding", "0.2rem"],
    //ボーダー
    border: ["border", "none"],
    //前景色
    color: ["color", "white"],
    //背景色
    background_color: ["background-color", "red"],
    //ボックス：ぼかし効果変更
    box_shadow: [
      "box-shadow",
      "0.5px 0.5px 2px 2px rgba(255, 200, 200, 0.9) inset)",
    ],
    //テキスト：ぼかし効果変更
    text_shadow: ["text-shadow", "1.5px 1.5px 2px rgba(32, 32, 32, 0.9)"],
    //背景グラデーションの向き(左から右)
    background_image: [
      "background-image",
      "linear-gradient(to right, rgba(255, 128, 128, 0.6) 5%, rgba(255, 0, 0, 1) 90%",
    ],
    //アニメーションが完了するまでの所要時間
    transition: ["transition", ""],
  },
  // iframeコンテンツ切替ボタン内 liのマウスホバー時スタイル定義
  hover_style: {
    //パディング
    padding: ["padding", "0"],
    //ボーダー
    border: ["border", "0.2rem solid black"],
    //前景色
    color: ["color", "black"],
    //背景色
    background_color: ["background-color", "cornflowerblue"],
    //ボックス：ぼかし効果変更
    box_shadow: [
      "box-shadow",
      "0.5px 0.5px 2px 2px rgba(238, 240, 241, 0.9) inset",
    ],
    //テキスト：ぼかし効果変更
    text_shadow: ["text-shadow", "1px 1px 1.5px rgba(255, 255, 255, 0.9)"],
    //背景グラデーションの向き(左から右)
    background_image: [
      "background-image",
      "linear-gradient(to right, rgba(238, 240, 241, 0.6) 5%, rgba(100, 149, 237, 1) 90%",
    ],
    //アニメーションが完了するまでの所要時間
    transition: ["transition", "background-color 2s"],
  },
};

// iframeコンテンツ切替ボタン内 liのカーソルスタイル定義
var cursor_styles = {
  //デフォルト(自動選択)
  auto_style: {
    //カーソル
    cursor: "cursor: auto !important;",
  },
  //待ち時間
  wait_style: {
    //カーソル
    cursor: "cursor: wait !important;",
  },
};
