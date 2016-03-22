/*
Obliterate the following items from: [====]

browsing history
download history
cookies and other site and plugin data
cached images and files
passwords
autofill form data
hosted app data
content licenses
*/

var URL = document.getElementById('url');
var select = document.getElementById('time');
var clear = document.getElementById('clear');


function erase()
{
  var link = URL.value;
  var ms = 1000*60*60*24;
  var now = (new Date()).getTime();
  var history = document.getElementById('time').value;
  if (history == 'lastHour')
  {
     var past = lastHour();
     chrome.history.deleteUrl({
     	//'startTime' : past, 
     	//'endTime' : now,
     	'url' : link
     }, function(){
     		alert('History from last hour cleared.');
 	});
  }/*
  else if (history == 'lastDay')
  {
      var past = lastDay();
      var pastDay = new Date(startTime: past, endTime: now);
  }
  else if (history == 'lastWeek')
  {
      var past = lastWeek();
      var pastWeek = new Date(past, now);
  }  
  else if (history == 'last4Weeks')
  {
      var past = last4Weeks();
      var past4Weeks = new Date(past, now);
  }  */
  else if (history == 'begin')
  {
     // chrome.history.deleteUrl({'details': url});
     chrome.history.deleteAll(function()
     {
     	alert('History entirely deleted.');
     });
  }  
};

clear.addEventListener('click', erase, false);
/*
function erase()
{
	alert('here');
  	chrome.history.search({
        'text' : url.value, // look for visits from stackoverflow
        'startTime' : start,
        'maxResults' : 30
      }, function(historyItems) {
        historyItems.forEach(
          function(item, i) {
          alert(item.title);});
}*/

function lastHour() 
{
  var ms = (new Date()).getTime() - 1000*60*60;
  return ms;
}

function lastDay()
{
  var ms = (new Date()).getTime() - 1000*60*60*24;
  return ms;
}

function lastWeek()
{
  var ms = (new Date()).getTime() - 1000*60*60*24*7;
  return ms;
}

function last4Weeks()
{
  var ms = (new Date()).getTime() - 1000*60*60*24*7*4;
  return ms;
}
