var stateCode = 'CA'
var apiKey = '&token=6QAW23I6MZ64BNBZ3KGM'
var queryURL = 'https://www.eventbriteapi.com/v3/events/search/?location.address=' + stateCode + apiKey

$.ajax({
  url : queryURL,
  method : "GET"
}).then( function(response){
  for (var i = 0 ; i < response.events.length ; i++){
    var eventName = response.events[i].name.text
    var eventDesctription = response.events[i].description.text
    var eventDatetime = response.events[i].start.local
    var eventURL = response.events[i].url

    var addEvent = '<tr>' +
    '<td>' + '<a href="' + eventURL + '">' + eventName + '</a>' + '</td>' +
    '<td>' + eventDesctription+ '</td>' + 
    '<td>' + eventDatetime + '</td>' + 
    '</tr>'

    $('#events').append(addEvent)
  }
  


    console.log(response.events[0].name.text)
    console.log(response.events)
    console.log(response.events[0].start.local)
})