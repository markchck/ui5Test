// sap.ui.define(["sap/m/Text"], (Text) => {
//   "use strict";
//   new Text({
//     text: "Hello, World!!",
//   }).placeAt("content");
// });

//* index.js가 직접 뷰를 생성하는 방식
// sap.ui.define(["sap/ui/core/mvc/XMLView"], (XMLView) => {
//   ("use strict");
//   XMLView.create({
//     viewName: "ui5.walkthrough.view.App",
//     // viewName: "wrong.path.view.App", // 에러 발생시키는 코드
//   })
//     .then((oView) => oView.placeAt("content"))
//     .catch((e) => console.error(e, "에러 발생쓰"));
// });

//* ComponentContainer를 사용하는 방식(직접 뷰를 생성하지 않고 모듈화된 컴포넌트를 이식하는)
// sap.ui.define(["sap/ui/core/ComponentContainer"], (ComponentContainer) => {
//   ("use strict");

//   new ComponentContainer({
//     name: "ui5.walkthrough",
//     settings: {
//       id: "walkthrough",
//     },
//     async: true,
//   }).placeAt("content");
// });

//* (최종) 컴포넌트가 manifest.json을 읽어서 뷰를 생성하는 방식
// index.js를 끼지 컴포넌트 관련 설정들은 manifest.json에서 직접 컴포넌트가 가져다가 쓰는 방식 따라서 index.js가 필요 없다.
