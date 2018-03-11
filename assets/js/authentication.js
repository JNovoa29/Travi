var database = firebase.database()
var LkpUsers = database.ref('users')
// var userInDB = false
// signup-username
// signup-email
// signup-password

// function AuthenticateUser(inputEmail, inputPass){

//   LkpUsers.on('value', function(snap) {
//     users = snap.val()
//     keys = Object.keys(users)

//     for (var i = 0; i < keys.length ; i ++) {
//       var k = keys[i]
//       var email = users[k].email
//       var password = users[k].password
//       isUserinDB(email, password, inputEmail, inputPass)
//     }
//     // if (isUserinDB === true){
//     //   window.location.replace('../')   
//     // }
//   })
// }

// function isUserinDB(email, pass, inputEmail, inputPass){
//   if (email === inputEmail && pass === inputPass) {
//     userInDB = true
//   }
// }



// function duplicateUserCheck(){
    
// }


// Login functionality
$('#loginBtn').on('click', function(event){
  event.preventDefault();    
  var email = $('#signin-email').val().trim()
  var pass = $('#signin-password').val().trim()
  
  var auth = firebase.auth() 
  var promise = auth.signInWithEmailAndPassword(email, pass)
  
  promise.catch(function(e) {
    $('#login-error').text(e.message)
  }) 
})

// Sign Up Functionality
$('#createAccountBtn').on('click', function(event){
  var signUpUsername = $('#signup-username').val().trim() // ToDo: Do something with username
  var email = $('#signup-email').val().trim() // ToDo: Check for real/valid email; regex?
  var pass = $('#signup-password').val().trim()
  
  var auth = firebase.auth() 
  var promise = auth.createUserWithEmailAndPassword(email, pass)
  
  $('#signup-username').val('')
  $('#signup-email').val('')
  $('#signup-password').val('')
  promise.then(function(){
    console.log('hi')
  })
  promise.catch(function(e) {
    $('#signup-error').text(e.message).css('color', 'red')
    
  })
  // $('#signup-error').text('User Has Been Created Successfully! Please Sign In to Continue').css('color', 'green')
})

$('#cd-logout').on('click', function(event){
  firebase.auth().signOut()
  window.location = './index.html'
})



// Authorization State Handling
firebase.auth().onAuthStateChanged(function(firebaseUser){
  if (firebaseUser) {
    $('#cd-signin').attr('class', 'hide')
    $('#cd-logout').removeClass('hide')
    console.log(firebaseUser)
  } else {
    $('#cd-signin').removeClass('hide')
    $('#cd-logout').attr('class', 'hide')
    console.log('nOt signed in')

  }
})
  
  
//   window.location = './index2.html'
//   AuthenticateUser(email, pass)
//   if (userInDB === true) {
//     console.log('doesthiswork?')
//     // console.log(window.location.href)
//     window.location = 'index2.html'
//     console.log(window.location)



	//REMOVE THIS - it's just to show error messages 
	// $form_login.find('input[type="submit"]').on('click', function(event){
	// 	event.preventDefault();
	// 	$form_login.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	// });
	// $form_signup.find('input[type="submit"]').on('click', function(event){
	// 	event.preventDefault();
	// 	$form_signup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	// });