var url = "http://opentechcalendar.co.uk/api1/area/59/events.jsonp?callback=?";

var mkhtml = function(entry) {
  return "<li>"
    +"<div class='when'><span class='date'>"+entry.start.displaylocal+"</span>"
    +"<span class='prettydate'>"+prettyDate(new Date(entry.start.rfc2882local))+"</span></div>"
    +"<h4>"+escapeHTML(entry.summaryDisplay)+"</h4>"
    +"<div class='desc'><p>"+escapeHTMLNewLine(entry.description)+"</p>"
    +" (<a href='"+entry.url+"'>More</a> "+(entry.url != entry.siteurl?"or <a href='"+entry.siteurl+"'>on OpenTechCalendar</a>":"")+")</div>"
    +"</li>";
};

function escapeHTML(str) {
	if(typeof str === "undefined") return '';
	if(str == null) return '';
	return str.replace("<","&lt;","g").replace(">","&gt;","g");
}	

function escapeHTMLNewLine(str) {
	if(typeof str === "undefined") return '';
	if(str == null) return '';
	return str.replace("<","&lt;","g").replace(">","&gt;","g").replace("\n","<br>","g");
}	

// Munged from resigs
function prettyDate(date){
var diff = ((date.getTime() - new Date().getTime()) / 1000),
day_diff = Math.floor(diff / 86400) + 1;

  return day_diff < 0 && "Already Been :(" ||
    day_diff == 0 && "Today!" ||
    day_diff == 1 && "Tomorrow!" ||
day_diff < 31 && "in " + day_diff + " days" ||
    "A while away";
}


$.getJSON(url, function(data) {
  var list = $("<ul>");
  $.each(data.data, function() {
    list.append(mkhtml(this));
  });

  list.find("h4").click( function() {
    $(this).parent().find(".desc").toggle("fast");
  });

  $("#cal").append(list);
});
