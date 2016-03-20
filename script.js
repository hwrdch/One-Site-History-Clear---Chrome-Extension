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

//alert('Hello');
var URL = document.getElementById('url');
var select = document.getElementById('time');
var clear = document.getElementById('clear');

/*
function erase()
{
  var link = URL.value;
  var date = new Date();
  var now = date.getTime();
  var history = this.options[this.selectedIndex].value;
  if (history == 'lastHour')
  {
      var past = lastHour(now);
      chrome.history.deleteRange({startTime: past, endTime: now});
  }
  else if (history == 'lastDay')
  {
      var past = lastDay(now);
      var pastDay = new Date(startTime: past, endTime: now);
  }
  else if (history == 'lastWeek')
  {
      var past = lastWeek(now);
      var pastWeek = new Date(past, now);
  }  
  else if (history == 'last4Weeks')
  {
      var past = last4Weeks(now);
      var past4Weeks = new Date(past, now);
  }  
  else if (history == 'begin')
  {
      chrome.history.deleteUrl({'details': url});
  }  
};
*/
clear.addEventListener('click', erase, false);

function erase()
{
  chrome.history.search({
        'text' : url.value, // look for visits from stackoverflow
        'startTime' : start,
        'maxResults' : 30
      }, function(historyItems) {
        historyItems.forEach(
          function(item, i) {
          alert(item.title);});
}
/*
function lastHour() 
{
  var now = date.getTime();
  var past = 1000*60*60;
  return = now - past;
}

function lastDay(date)
{
  var now = date.getTime();
  var past = 1000*60*60*24;
  return = now - past;
}

function lastWeek(date)
{
  var now = date.getTime();
  var past = 1000*60*60*24*7;
  return = now - past;
}

function last4Weeks(date)
{
  var now = date.getTime();
  var past = 1000*60*60*24*28;
  return = now - past;
}
*/