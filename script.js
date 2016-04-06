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
  var now = (new Date()).getTime();
  var hist = document.getElementById('time').value;
  if (hist == 'lastHour')
  {
     var past = lastHour();

    //use browsingData API's
	//retrieve info

	/*chrome.history.getVisits(link, function(visitItems)
	{
		for (int i = 0; i < visitItems.length - 1; i++)
		{
			alert(visitItems[i].);
		}
	});*/
     chrome.history.search({
		'text' : '',
     	'startTime' : past, 
     	'endTime' : now,
     	'maxResults' : 10
     	//'url' : link
     }, function(histItems){
     		for (i = 0; i < histItems.length; i++)
			{
				alert(link);

				if ()
				{
					alert(histItems[i].url);
					chrome.history.deleteRange(
					{
						'startTime' : histItems[i].lastVisitTime,
						'endTime' : histItems[i].lastVisitTime
					});
				}
			}
			//alert("History deleted for last hour.");
 	});
  }
  else if (hist == 'lastDay')
  {
      var past = lastDay();
      //var pastDay = new Date(startTime: past, endTime: now);
  }
  else if (hist == 'lastWeek')
  {
      var past = lastWeek();
      //var pastWeek = new Date(past, now);
  }  
  else if (hist == 'last4Weeks')
  {
      var past = last4Weeks();
      //var past4Weeks = new Date(past, now);
  }  
  else if (hist == 'begin')
  {
     // chrome.history.deleteUrl({'details': url});
     chrome.hist.deleteAll(function()
     {
     	alert('History entirely deleted.');
     });
  }  
};

clear.addEventListener('click', erase, false);

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
