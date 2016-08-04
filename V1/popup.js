$(function() {
	  $('#s').click(function() {
		       var url  = "http://earthquake.usgs.gov/earthquakes/eventpage/" + $('#q').val() + "#executive";
		            chrome.tabs.create({url: url});
			      });
});

document.addEventListener('DOMContentLoaded');
