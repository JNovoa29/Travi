var stateName =  sessionStorage.getItem("stateName")
var apiKey = '&token=6QAW23I6MZ64BNBZ3KGM'
var queryURL = 'https://www.eventbriteapi.com/v3/events/search/?location.address=' + stateName + apiKey

// convert date time notation from API to more readable date time
function datetimeConvert(datetime){
  var date = moment(datetime.split('T')[0], 'YYYY-MM-DD').format('MMM Do, YYYY')
  var time = moment(datetime.split('T')[1], 'HH:mm:ss').format('h:mm A')

  return date + ' @' + time //return formatted datetime
}

// push state name to headerß
$('.current-state').text(stateName)

$.ajax({
  url : queryURL,
  method : "GET"
}).then( function(response){

  for (var i = 0 ; i < response.events.length ; i++){
    var eventName = response.events[i].name.text
    var eventDatetime = response.events[i].start.local
    var eventURL = response.events[i].vanity_url
    var eventURLText = eventURL

    // If an event URL does not have a vanity URL, replace URL and URL TEXT with the normal URL
    if (eventURL === undefined){
      eventURL = response.events[i].url
      eventURLText = response.events[i].url
    }

    // Add properties to coressponding html columns
    $('.event-name').append('<p class="event-name-item">' + eventName + '</p>')
    $('.event-link').append('<p><a href="' + eventURL + '">' + eventURLText + '</a></p>')
    $('.event-time').append('<p class="event-time-item">' + datetimeConvert(eventDatetime) + '</p>')
  }
})
