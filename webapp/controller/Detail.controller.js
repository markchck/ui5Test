sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"],
  (Controller, History) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.Detail", {
      onInit() {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter
          .getRoute("detail")
          .attachPatternMatched(this.onObjectMatched, this);
      },

      onObjectMatched(oEvent) {
        this.getView().bindElement({
          path:
            "/" +
            window.decodeURIComponent(
              oEvent.getParameter("arguments").invoicePath
            ),
          model: "invoice",
        });
      },
      onNavBack() {
        const oHistory = History.getInstance();
        console.log("oHistory", oHistory);
        const sPrevioushHash = oHistory.getPreviousHash();
        console.log("sPrevioushHash", sPrevioushHash);

        if (sPrevioushHash !== undefined) {
          window.history.go(-1);
        } else {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("overview", {});
        }
      },
    });
  }
);
