sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
      // onInit() {
      //   // set data model on view
      //   const oData = {
      //     recipient: {
      //       name: "world",
      //     },
      //   };

      //   const oModel = new JSONModel(oData);

      //   this.getView().setModel(oModel);
      //   // console.log("this?", this);
      //   // console.log("getView?", this.getView());
      //   // console.log("setModel", this.getView().setModel(oModel));
      // },

      onSayHelloButtonPress() {
        MessageToast.show("Hello, World!!");
      },
    });
  }
);
