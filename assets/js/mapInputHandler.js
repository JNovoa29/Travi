$('#g5').on('click', function(response){
  var stateName = response.target.dataset.value
  sessionStorage.setItem("stateName", stateName)
  
  if (isLoggedIn === true){
    window.location = './index2.html'
  } else {
    $('#userNotLoggedIn').modal('show')
  }

})