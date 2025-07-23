sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("profile.controller.View1", {
        onInit() {
        },
        onAfterRendering:function(){
            debugger
            var array = ["html5","css","bootstrap","javascript","jquery","sapui5fiori"]
            array.forEach(element => {
                this.getView().byId(element).setSrc(jQuery.sap.getModulePath("profile") + "/model/" + element + ".png"); 
            });

        },
        onPressHeadingDown: function (oEvent) {
            var bExpanded = oEvent.getSource().getParent().getParent().getShowHeaderContent();
            oEvent.getSource().getParent().getParent().setShowHeaderContent(!bExpanded);
            oEvent.getSource().setIcon(bExpanded ? "sap-icon://navigation-down-arrow" : "sap-icon://navigation-up-arrow");
        }
        
    });
});