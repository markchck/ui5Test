sap.ui.define(["../localService/mockserver"], (mockserver) => {
  "use strict";

  console.log("이게 먼저 실행되지?");
  // initialize the mock server
  mockserver.init();
  console.log("이게 나중에 실행되지?");

  // initialize the embedded component on the HTML page
  sap.ui.require(["sap/ui/core/ComponentSupport"]);
});
