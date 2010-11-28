$(document).ready(function() {
	var item1 = $(".edizione-grafica:first");
	var item2 = $(".tr-home-serie-a");
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
	
	if (hidden) {
		chrome.extension.sendRequest({
			"type": "hidcontent",
			"website": "www.corriere.it"
		});
	}
});
