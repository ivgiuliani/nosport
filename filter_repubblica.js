var item = $("#dirette-dashboard");
if (item && item.length > 0) {
	item.hide();
	chrome.extension.sendRequest({
		"title": "www.repubblica.it",
		"message": "I hid sport content!"
	});
}

