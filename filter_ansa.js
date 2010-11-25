var items = $(".subcover h3");
var item;
var hidden = 0;

for (var i = 0; i < items.length; i++) {
	item = items[i];

	var text = $(item).text();
	if (text && text.toLowerCase() == "sport") {
		hidden++;
		$(item).parent().hide();
	}
}

if (hidden > 0) {
	chrome.extension.sendRequest({
			"message": "Content hidden from ansa.it"
	});
}
