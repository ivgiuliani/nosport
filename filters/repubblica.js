$(document).ready(function() {
  var hidden = false;

	var panel = $("#dirette-dashboard");
  var box = $("div.riapertura-large");

	if (panel && panel.length > 0) {
		panel.hide();
    hidden = true;
  }

  if (box && box.length > 0) {
    var boxpanel = box.first("h5:contains('Serie A')");
    if (boxpanel && boxpanel.length > 0) {
      box.hide();
      hidden = true;
    }
  }

  if (hidden) {
		chrome.extension.sendRequest({
			"type": "hidcontent",
			"website": "www.repubblica.it"
		});
	}
});
