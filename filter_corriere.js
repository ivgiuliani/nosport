var item = $(".edizione-grafica:first")
if (item && item.length > 0) {
	item.hide();
	chrome.extension.sendRequest({"message": "Content hidden from corriere.it"});
}
