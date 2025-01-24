// sap.ui.define(["sap/m/Text"], (Text) => {
//   "use strict";
//   new Text({
//     text: "Hello, World!!",
//   }).placeAt("content");
// });

sap.ui.define(["sap/ui/core/mvc/XMLView"], (XMLView) => {
  ("use strict");
  XMLView.create({
    viewName: "ui5.walkthrough.view.App",
    // viewName: "wrong.path.view.App", // 에러 발생시키는 코드
  })
    .then((oView) => oView.placeAt("content"))
    .catch((e) => console.error(e, "에러 발생쓰"));
});
