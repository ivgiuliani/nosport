$(document).ready(function() {
	// really, really need a better checklist
	var item1 = $(".edizione-grafica:first");
	var item2 = $(".tr-home-serie-a");
	var item3 = $(".tr-home-champions");
	var item4 = $(".minisport_player_container");
	var item5 = $("#soppalco-gol");
	var hidden = false;
	
	if (item1 && item1.length > 0) {
		item1.hide();
		hidden = true;
	}

	if (item2 && item2.length > 0) {
		item2 = item2.parent();
		item2.hide();
		hidden = true;
	}

	if (item3 && item3.length > 0) {
		item3 = item3.parent();
		item3.hide();
		hidden = true;
	}

	if (item4 && item4.length > 0) {
		item4.hide();
		hidden = true;
	}

	if (item5 && item5.length > 0) {
		item5.hide();
		hidden = true;
	}

	var smallbox = $("p.mini-head-small");
	// use a dict so we can use the 'in' operator
	var ignorelist = {"SERIE A": "",
		                "CALCIOMERCATO": "",
										"CALCIO": "",
										"CHAMPIONS LEAGUE": ""};
	if (smallbox && smallbox.length > 0) {
		for (var item = 0; item < smallbox.length; item++) {
			var c1 = $(smallbox[item]).html();
			var c2 = $(smallbox[item]).find("a");
			if (c2) c2 = c2.html();
			if (c1 in ignorelist || c2 in ignorelist) {
				hidden = true;
				$(smallbox[item]).parent().hide();
			}
		}
	}

	if (hidden) {
		chrome.extension.sendRequest({
			"type": "hidcontent",
			"website": "www.corriere.it"
		});
	}
});
