var item = $(".edizione-grafica:first")
if (item && item.length > 0) {
	item.hide();
	chrome.extension.sendRequest({
		"title": "www.corriere.it",
		"message": "I hid sport content!"
	});
}
