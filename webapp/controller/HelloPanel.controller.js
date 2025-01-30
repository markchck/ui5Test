sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
      onSayHelloButtonPress() {
        // read msg from i18n model
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        console.log("i18n리소스 : ", oBundle);
        const sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        const sMsg = oBundle.getText("helloMsg", [sRecipient]);

        MessageToast.show(sMsg);
      },
    });
  }
);
