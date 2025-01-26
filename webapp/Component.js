sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  (UIComponent, JSONModel) => {
    "use strict";

    return UIComponent.extend("ui5.walkthrough.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
        // rootView: {
        //   viewName: "ui5.walkthrough.view.App",
        //   type: "XML",
        //   id: "app",
        // },
      },

      init() {
        UIComponent.prototype.init.apply(this, arguments);

        const oData = {
          recipient: {
            name: "world",
          },
        };
        const oModel = new JSONModel(oData);
        this.setModel(oModel);
      },
    });
  }
);
