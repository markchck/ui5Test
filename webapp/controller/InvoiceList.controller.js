sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (Controller, JSONModel, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
      onInit() {
        const oViewModel = new JSONModel({
          currency: "EUR",
        });

        this.getView().setModel(oViewModel, "view");
      },
      onFilterInvoices(oEvent) {
        const aFilter = [];
        const sQuery = oEvent.getParameter("query");
        if (sQuery) {
          aFilter.push(
            new Filter("Federal Shipping", FilterOperator.Contains, sQuery)
          );
        }
        const oList = this.byId("invoiceList");
        const oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      },
      onPress(oEvent) {
        const oItem = oEvent.getSource();
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("detail", {
          invoicePath: window.encodeURIComponent(
            oItem.getBindingContext("invoice").getPath().substring(1)
          ),
        });
      },
    });
  }
);
