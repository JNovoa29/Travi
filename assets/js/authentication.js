var database = firebase.database()
var LkpUsers = database.ref('users')
var userInDB = false
// signup-username
// signup-email
// signup-password

function AuthenticateUser(inputEmail, inputPass){

  LkpUsers.on('value', function(snap) {
    users = snap.val()
    keys = Object.keys(users)

    for (var i = 0; i < keys.length ; i ++) {
      var k = keys[i]
      var email = users[k].email
      var password = users[k].password
      isUserinDB(email, password, inputEmail, inputPass)
    }
    // if (isUserinDB === true){
    //   window.location.replace('../')   
    // }
  })
}

function isUserinDB(email, pass, inputEmail, inputPass){
  if (email === inputEmail && pass === inputPass) {
    userInDB = true
  }
}



function duplicateUserCheck(){
    
}


$(document).on('click', '#createAccountBtn', function(){
    var signUpUsername = $('#signup-username').val().trim().toLowerCase()
    var signUpEmail = $('#signup-email').val().trim().toLowerCase()
    var signUpPassword = $('#signup-password').val().trim().toLowerCase()
    
    LkpUsers.push({
        username : signUpUsername,
        email : signUpEmail,
        password : signUpPassword
    })
})

$(document).on('click', '#loginBtn', function(){
    event.preventDefault();    
    console.log('working')
  var email = $('#signin-email').val().trim().toLowerCase()
  var pass = $('#signin-password').val().trim().toLowerCase()
  window.location = './index2.html'
  AuthenticateUser(email, pass)
  if (userInDB === true) {
    console.log('doesthiswork?')
    // console.log(window.location.href)
    window.location = 'index2.html'
    console.log(window.location)
  }
})


	//REMOVE THIS - it's just to show error messages 
	// $form_login.find('input[type="submit"]').on('click', function(event){
	// 	event.preventDefault();
	// 	$form_login.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	// });
	// $form_signup.find('input[type="submit"]').on('click', function(event){
	// 	event.preventDefault();
	// 	$form_signup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	// });