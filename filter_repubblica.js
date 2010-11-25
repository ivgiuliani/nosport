var item = $("#dirette-dashboard");
if (item && item.length > 0) {
	item.hide();
	chrome.extension.sendRequest({"message": "Content hidden from repubblica.it"});
}

