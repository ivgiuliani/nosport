$(document).ready(function() {
	var item = $(".bloque-deportes-derecha-elmundoes");
	if (item && item.length > 0) {
		item.hide();
		chrome.extension.sendRequest({
			"type": "hidcontent",
			"website": "www.elmundo.es"
		});
	}
});

