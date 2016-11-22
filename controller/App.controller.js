sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.App", {

		onShowHello: function() {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		}

		,

		onSearchOTRS: function(oEvent) {

			//alert("Search triggered: " + oEvent.getParameter("clearButtonPressed"));

			if (oEvent.getParameter("clearButtonPressed") == false) {
				var TicketNumber = oEvent.getParameter("query");
				var URL = "http://otrs.msnet.railb.be/otrs/index.pl?Action=AgentTicketZoom;TicketNumber=" + TicketNumber;
				window.open(URL, '_blank');

			}
			//alert("Search triggered: " + oEvent.getParameter("query"));
		},

		onSearchEIM: function(oEvent) {

			//alert("Search triggered: " + oEvent.getParameter("clearButtonPressed"));

			if (oEvent.getParameter("clearButtonPressed") == false) {
				var EIM = oEvent.getParameter("query");
				var URL = "http://eim.belgianrail.be/otcs01/llisapi.dll/open/FSP" + EIM;
				window.open(URL, '_blank');

			}
			//alert("Search triggered: " + oEvent.getParameter("query"));
		},
		onPressCopyEIM: function(oEvent) {
			var URL;
			var EIM = this.getView().byId("EIM").getValue();

			/*MessageToast.show(sap.ui.Device.browser.name);*/

			if (EIM !== "") {

				switch (sap.ui.Device.browser.name) {

					case "cr":
						URL = "http://eim.belgianrail.be/otcs01/llisapi.dll/open/FSP" + EIM;
						var input = document.createElement('textarea');
						document.body.appendChild(input);
						input.value = (URL);
						input.focus();
						input.select();
						document.execCommand('Copy');
						input.remove();
						MessageToast.show("EIM Link copied to clipboard!");
						break;
					case "ie":
						URL = "http://eim.belgianrail.be/otcs01/llisapi.dll/open/FSP" + EIM;
						/*MessageToast.show(source);*/
						window.clipboardData.setData('text', URL);
						MessageToast.show("EIM Link copied to clipboard!");

				}
			}

		},
		onPressCopyOTRS: function(oEvent) {
			var URL;
			var OTRS = this.getView().byId("OTRS").getValue();

			/*MessageToast.show(sap.ui.Device.browser.name);*/

			if (OTRS !== "") {

				switch (sap.ui.Device.browser.name) {

					case "cr":
						URL = "http://otrs.msnet.railb.be/otrs/index.pl?Action=AgentTicketZoom;TicketNumber=" + OTRS;
						var input = document.createElement('textarea');
						document.body.appendChild(input);
						input.value = (URL);
						input.focus();
						input.select();
						document.execCommand('Copy');
						input.remove();
						MessageToast.show("EIM Link copied to clipboard!");
						break;
					case "ie":
						URL = "http://otrs.msnet.railb.be/otrs/index.pl?Action=AgentTicketZoom;TicketNumber=" + OTRS;
						/*MessageToast.show(source);*/
						window.clipboardData.setData('text', URL);
						MessageToast.show("EIM Link copied to clipboard!");

				}
			}

		},

		onPressTileOTRSOwner: function(oEvent) {
			var URL =
				"http://otrs.msnet.railb.be/otrs/index.pl?Action=AgentTicketSearch;Subaction=Search;TakeLastSearch=1;SaveProfile=1;Profile=My%20Tickets%20%28Owner%29";
			window.open(URL, '_blank');

		},
		onPressTileOTRSCreator: function(oEvent) {
			var URL =
				"http://otrs.msnet.railb.be/otrs/index.pl?Action=AgentTicketSearch;Subaction=Search;TakeLastSearch=1;SaveProfile=1;Profile=My%20tickets%20%28Creator%29";
			window.open(URL, '_blank');

		},
		onPressTileQC: function(oEvent) {
			var URL =
				"http://b-alm/qcbin/start_a.jsp";
			window.open(URL, '_blank');
}
	});

});