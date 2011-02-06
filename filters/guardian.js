$(document).ready(function() {
	var box = $("#best-of-web");
	var hidden = false;

	if ($(box).find("a").html() == "Sport picks") {
		hidden = true;
		$(box).hide();
	}

	if (hidden) {
		chrome.extension.sendRequest({
			"type": "hidcontent",
			"website": "guardian.co.uk"
		});
	}
});
