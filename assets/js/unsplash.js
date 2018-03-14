var userInput = 'california'

var picsURL = 'https://api.unsplash.com/search/photos/?client_id=e57d42fef842c3fe03fbb0428521a75bcfd2560a352eeb229643ad1c0d0469f6&query=' + userInput;

$.ajax({
    url: picsURL,
    method: 'GET'
}).done(function(response){

var statePic1 = response.results[0].urls.small;

var statePic2 = response.results[1].urls.small;

var statePic3 = response.results[2].urls.small;

var statePic4 = response.results[3].urls.small;

var statePic5 = response.results[4].urls.small;

$('#pic1').attr('src', statePic1);
$('#pic2').attr('src', statePic2);
$('#pic3').attr('src', statePic3);
$('#pic4').attr('src', statePic4);
$('#pic5').attr('src', statePic5);

});
