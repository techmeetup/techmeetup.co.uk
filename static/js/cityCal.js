/**
 * OpenTechCalendar Event List Widget
 * @author James Baster <james@jarofgreen.co.uk>
 */

var OpenTechCalendarEventListCallBackFunctionCount = 0;

function placeOpenTechCalendarEventListWidget(divid, options) {
	var usingOptions = {
		eventCount: 5,
		title: undefined,
		maxStringLength: 300,
		groupID: undefined,
		openInNewWindow: true
	}
	for (var prop in options) {
		if (options.hasOwnProperty(prop)) {
			usingOptions[prop] = options[prop];
		}
	}
	var div = document.getElementById(divid);
	if (!div) return;

	var target = usingOptions['openInNewWindow'] ? ' target="_BLANK"' : '';

	div.innerHTML = '<div class="openTechCalendarEventListData">'+
			'<div class="openTechCalendarEventListEvents" id="'+divid+'Data">Loading</div>'+
		'</div>';
	var dataDiv = document.getElementById(divid+"Data");
	var headTag = document.getElementsByTagName('head').item(0);
		

	OpenTechCalendarEventListCallBackFunctionCount++;
	window["OpenTechCallBackFunction"+OpenTechCalendarEventListCallBackFunctionCount] = function(data) {			
		var html = '';
		var limit = Math.min(data.data.length, usingOptions.eventCount);
		if (limit <= 0) {
			html = '<div class="openTechCalendarEventListEventNone">No events</div>';
		} else {
			for (var i=0;i<limit;i++) {
				html += htmlFromEventOpenTechCalendarEventList(data.data[i], usingOptions.maxStringLength, target);
			}
		}

		dataDiv.innerHTML=html;
	}
	var url;
	if (usingOptions.groupID) {
		url = "http://opentechcalendar.co.uk/index.php/group/"+usingOptions.groupID+"/jsonp";
	} else {
		url = "http://opentechcalendar.co.uk/index.php/event/jsonp";
	}

	var script = document.createElement("script");
	script.type = "text/javascript"; 
	script.src = url+"?callback=OpenTechCallBackFunction"+OpenTechCalendarEventListCallBackFunctionCount;
	headTag.appendChild(script);
	
}

function htmlFromEventOpenTechCalendarEventList(event, maxLength, target) {
	var html = '<div class="openTechCalendarEventListEvent">'
	html += '<h3><a href="'+event.siteurl+'" '+target+'>'+event.start.displaylocal+': '+escapeHtmlOpenTechCalendarEventList(event.summaryDisplay)+'</a></h3>';
	html += '<div class="openTechCalendarEventListDescription">'+escapeHtmlNewLineOpenTechCalendarEventList(event.description, maxLength)+'</div>';
	html += '<a class="openTechCalendarEventListMoreLink" href="'+event.siteurl+'" '+target+'>More Info</a>';
	html += '<div class="openTechCalendarEventListClear"></div>';	
	return html+'</div>';
}

function escapeHtmlOpenTechCalendarEventList(str) {
	var div = document.createElement('div');
	div.appendChild(document.createTextNode(str));
	return div.innerHTML;
};


function escapeHtmlNewLineOpenTechCalendarEventList(str, maxLength) {
	var div = document.createElement('div');
	div.appendChild(document.createTextNode(str));
	var out =  div.innerHTML;
	if (out.length > maxLength) {
		out = out.substr(0,maxLength)+" ...";
	}
	return out.replace(/\n/g,'<br>');
};



