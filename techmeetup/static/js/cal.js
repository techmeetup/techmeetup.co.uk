
var url = "http://opentechcalendar.co.uk/index.php/event/jsonp?callback=?";

var mkhtml = function(entry) {
  return "<li>"
    +"<div class='when'><span class='date'>"+entry.start.displaylocal+"</span>"
    +"<span class='prettydate'>"+prettyDate(new Date(entry.start.rfc2882local))+"</span></div>"
    +"<h4>"+escapeHTML(entry.summary)+"</h4>"
    +"<div class='desc'><p>"+escapeHTML(entry.group.title)+"</p>"
    +"<strong>Where: </strong>"+escapeHTML(entry.location.title)
    +" (<a href='"+entry.url+"'>More</a>)</div>"
    +"</li>";
};

function escapeHTML(str) {
	return str.replace("<","&lt;","g").replace(">","&gt;","g");
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
