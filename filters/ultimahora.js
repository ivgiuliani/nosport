$(document).ready(function() {
	var item = $(".box_deportes");
	if (item && item.length > 0) {
		item.hide();
		chrome.extension.sendRequest({
			"type": "hidcontent",
			"website": "www.ultimahora.es"
		});
	}
});
