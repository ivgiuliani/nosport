var item = $(".edizione-grafica:first")
if (item && item.length > 0) {
	item.hide();
	chrome.extension.sendRequest({
		"type": hidcontent,
		"website": "www.corriere.it"
	});
}
