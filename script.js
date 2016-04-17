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

clear.addEventListener('click', erase, false);

function erase()
{
  var link = URL.value;   //this is a substring checked by each URL within range
  var now = (new Date()).getTime();
  var hist = document.getElementById('time').value;
  var past;
  if (hist == 'lastHour')
  {
    past = lastHour();
  }
  else if (hist == 'lastDay')
  {
    past = lastDay();
  }
  else if (hist == 'lastWeek')
  {
    past = lastWeek();
  }  
  else if (hist == 'last4Weeks')
  {
    past = last4Weeks();
  }  
  else if (hist == 'begin')
  {
    past = new Date().getTime();
  } 
     chrome.history.search({
      'text' : '',
      'startTime' : past, 
      'endTime' : now,
      'maxResults' : 10000000000

     }, function(histItems){
        for (i = 0; i < histItems.length; i++)
        {
            //alert(histItems[i].url);
            if (histItems[i].url.indexOf(link) > -1)
            {
                alert(histItems[i].title);
                var start = histItems[i].lastVisitTime - 1;
                //alert(Date(histItems[i].lastVisitTime).toString());
                chrome.history.deleteRange({
                'startTime' : histItems[i].lastVisitTime - 1,
                'endTime' : histItems[i].lastVisitTime + 1
                });
            }
        }
        alert("Browsing history cleared.");
      //alert("History deleted for last hour.");
    }); 
};

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