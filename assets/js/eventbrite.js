var stateName =  sessionStorage.getItem("stateName")
var apiKey = '&token=6QAW23I6MZ64BNBZ3KGM'
var queryURL = 'https://www.eventbriteapi.com/v3/events/search/?location.address=' + stateName + + + apiKey

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
    $('.event-time').append('<p class="event-time-item">' + eventDatetime + '</p>')
  }
})