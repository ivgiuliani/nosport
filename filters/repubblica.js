$(document).ready(function() {
	var item = $("#dirette-dashboard");
	if (item && item.length > 0) {
		item.hide();
		chrome.extension.sendRequest({
			"type": "hidcontent",
			"website": "www.repubblica.it"
		});
	}
});
