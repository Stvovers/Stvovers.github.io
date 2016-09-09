sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.App", {

		onShowHello : function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		}
		
		,
		
		onSearchOTRS: function(oEvent){
			
			//alert("Search triggered: " + oEvent.getParameter("clearButtonPressed"));
			
			if 	(oEvent.getParameter("clearButtonPressed")== false){
				var TicketNumber = oEvent.getParameter("query");
				var URL = "http://otrs.msnet.railb.be/otrs/index.pl?Action=AgentTicketZoom;TicketNumber=" + TicketNumber;
				window.open(URL, '_blank');
			}
		//alert("Search triggered: " + oEvent.getParameter("query"));
		},
		
		onSearchEIM: function(oEvent){
			
			//alert("Search triggered: " + oEvent.getParameter("clearButtonPressed"));
			
			if 	(oEvent.getParameter("clearButtonPressed")== false){
				var EIM = oEvent.getParameter("query");
				var URL = "http://eim.belgianrail.be/otcs01/llisapi.dll/open/FSP" + EIM;
				window.open(URL, '_blank');
			}
		//alert("Search triggered: " + oEvent.getParameter("query"));
		}
		
	});

});
