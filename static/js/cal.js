
var id = "o98d4vut41mlv93evb9pitbjuk%40group.calendar.google.com";
var url = "http://www.google.com/calendar/feeds/"+id+"/public/full?orderby=starttime&max-results=15&singleevents=true&sortorder=ascending&futureevents=true&alt=json-in-script&callback=?";

var months = {
  0:"Jan", 1:"Feb",  2:"Mar", 3:"Apr",  4:"May", 5:"Jun",
  6:"Jul", 7:"Aug",  8:"Sep", 9:"Oct",  10:"Nov", 11:"Dec"
};

var suffix = function(day) {
  return (day == 1 || day == 21 || day == 31 ) && "st" ||
    ( day == 2 || day == 22 ) && "nd" ||
    ( day == 3 || day == 23 ) && "rd" ||
    "th";
};

var autolink = function(s)
{
   var hlink = /\s(ht|f)tp:\/\/([^ \,\;\:\!\)\(\"\'\<\>\f\n\r\t\v])+/g;
   return (s.replace (hlink, function ($0,$1,$2) {
     s = $0.substring(1,$0.length);
     return " <a href='"+s+"' target='_blank'>"+s+"</a>";
   }));
};


var mkhtml = function(entry) {
  var start = parseGCalTime(entry.gd$when[0].startTime);
  var datestr = start.getDate()+suffix(start.getDate())+" "
    + months[start.getMonth()];
  return "<li>"
    +"<div class='when'><span class='date'>"+datestr+"</span>"
    +"<span class='prettydate'>"+prettyDate(start)+"</span></div>"
    +"<h4>"+entry.title.$t+"</h4>"
    +"<div class='desc'><p>"+autolink(entry.content.$t)+"</p>"
    +"<strong>Where: </strong>"+entry.gd$where[0].valueString
    +" (<a href='"+entry.link[0].href+"'>Google Calendar</a>)</div>"
    +"</li>";
};

// nicked from googles example (wtf dont they just send parsable
// dates
function parseGCalTime(gCalTime) {
  // text for regex matches
  var remtxt = gCalTime;

  function consume(retxt) {
    var match = remtxt.match(new RegExp('^' + retxt));
    if (match) {
      remtxt = remtxt.substring(match[0].length);
      return match[0];
    }
    return '';
  }

  // minutes of correction between gCalTime and GMT
  var totalCorrMins = 0;

  var year = consume('\\d{4}');
  consume('-?');
  var month = consume('\\d{2}');
  consume('-?');
  var dateMonth = consume('\\d{2}');
  var timeOrNot = consume('T');

  // if a DATE-TIME was matched in the regex
  if (timeOrNot == 'T') {
    var hours = consume('\\d{2}');
    consume(':?');
    var mins = consume('\\d{2}');
    consume('(:\\d{2})?(\\.\\d{3})?');
    var zuluOrNot = consume('Z');

    // if time from server is not already in GMT, calculate offset
    if (zuluOrNot != 'Z') {
      var corrPlusMinus = consume('[\\+\\-]');
      if (corrPlusMinus != '') {
        var corrHours = consume('\\d{2}');
        consume(':?');
        var corrMins = consume('\\d{2}');
        totalCorrMins = (corrPlusMinus=='-' ? 1 : -1) *
            (Number(corrHours) * 60 +
	    (corrMins=='' ? 0 : Number(corrMins)));
      }
    }

    // get time since epoch and apply correction, if necessary
    // relies upon Date object to convert the GMT time to the local
    // timezone
    var originalDateEpoch = Date.UTC(year, month - 1, dateMonth, hours, mins);
    var gmtDateEpoch = originalDateEpoch + totalCorrMins * 1000 * 60;

    return new Date(gmtDateEpoch);
  } else {
    return new Date(new Date().getFullYear(),
                    parseInt(month, 10)-1,
                    parseInt(dateMonth, 10));
  }
}

// Munged from resigs
function prettyDate(date){
	var     diff = ((date.getTime() - new Date().getTime()) / 1000),
		day_diff = Math.floor(diff / 86400) + 1;

  return day_diff < 0 && "Already Been :(" ||
    day_diff == 0 && "Today!" ||
    day_diff == 1 && "Tomorrow!" ||
	day_diff < 31 && "in " + day_diff + " days" ||
    "A while away";
}


$.getJSON(url, function(data) {
  var list = $("<ul>");
  $.each(data.feed.entry, function() {
    list.append(mkhtml(this));
  });

  list.find("h4").click( function() {
    $(this).parent().find(".desc").toggle("fast");
  });

  $("#cal").append(list);
});
