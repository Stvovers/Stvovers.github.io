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
		onPressOTRSlink: function(oEvent) {
			
				var URL = "http://otrs.msnet.railb.be/";
				window.open(URL, '_blank');
			
		},
				onPressEIMlink: function(oEvent) {
			
				var URL = "http://eim.belgianrail.be/otcs01/llisapi.dll?func=ll&objId=2015178&objAction=browse&viewType=1#";
				window.open(URL, '_blank');
			
		},

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
		onSearchCharm: function(oEvent) {

			//alert("Search triggered: " + oEvent.getParameter("clearButtonPressed"));

			if (oEvent.getParameter("clearButtonPressed") == false) {
				var Charm = oEvent.getParameter("query");
				var URL = "http://sapxbp.msnet.railb.be:8102/sap/bc/bsp/sap/crm_ui_start/default.htm?crm-object-type=AIC_OB_CMCD&crm-object-action=B&crm-object-keyname=OBJECT_ID&crm-object-value=" + Charm;
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
			onPressCopyCharm: function(oEvent) {
			var URL;
			var Charm = this.getView().byId("Charm").getValue();

			/*MessageToast.show(sap.ui.Device.browser.name);*/

			if (Charm !== "") {

				switch (sap.ui.Device.browser.name) {

					case "cr":
						URL = "http://sapxbp.msnet.railb.be:8102/sap/bc/bsp/sap/crm_ui_start/default.htm?crm-object-type=AIC_OB_CMCD&crm-object-action=B&crm-object-keyname=OBJECT_ID&crm-object-value=" + Charm;
						var input = document.createElement('textarea');
						document.body.appendChild(input);
						input.value = (URL);
						input.focus();
						input.select();
						document.execCommand('Copy');
						input.remove();
						MessageToast.show("Charm Link copied to clipboard!");
						break;
					case "ie":
						URL = "http://sapxbp.msnet.railb.be:8102/sap/bc/bsp/sap/crm_ui_start/default.htm?crm-object-type=AIC_OB_CMCD&crm-object-action=B&crm-object-keyname=OBJECT_ID&crm-object-value=" + Charm;
						/*MessageToast.show(source);*/
						window.clipboardData.setData('text', URL);
						MessageToast.show("Charm Link copied to clipboard!");

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