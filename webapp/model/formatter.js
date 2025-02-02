sap.ui.define([], () => {
  "use strict";
  return {
    statusText(sStatus) {
      const oResourceBundle = this.getOwnerComponent()
        .getModel("i18n")
        .getResourceBundle();
      console.log("this가 뭐지?", this);
      console.log("this.getOwnerComponent()", this.getOwnerComponent());
      console.log("o");
      switch (sStatus) {
        case "A":
          return oResourceBundle.getText("invoiceStatusA");
        case "B":
          return oResourceBundle.getText("invoiceStatusB");
        case "C":
          return oResourceBundle.getText("invoiceStatusC");
        default:
          return sStatus;
      }
    },
  };
});
