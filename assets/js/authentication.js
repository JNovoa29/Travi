var database = firebase.database()
var LkpUsers = database.ref('users')
var isLoggedIn

// Login functionality
$('#signInBtn').on('click', function(event){
  event.preventDefault();    
  // user input
  var email = $('#Form-email1').val().trim()
  var pass = $('#Form-pass1').val().trim()
  // firebase sign in
  var auth = firebase.auth() 
  var promise = auth.signInWithEmailAndPassword(email, pass)

  // If successful, return to main landing page
  promise.then(function(){
    window.location = './index.html'
  })

  promise.catch(function(e) {
    $('#login-error').text(e.message).css('color', 'red')
  }) 
})

$('#logoutBtn').on('click', function(event){
  firebase.auth().signOut()
  window.location = './index.html'
})


// Authorization State Handling
firebase.auth().onAuthStateChanged(function(firebaseUser){
  if (firebaseUser) {
    isLoggedIn = true
    $('#loginBtn').css('display', 'none')
  } else {
    isLoggedIn = false
    $('#loginBtn').css('display', 'inital')
  }
})

// // Sign Up Functionality - Currently Unsupported
// $('#createAccountBtn').on('click', function(event){
//   var signUpUsername = $('#signup-username').val().trim() // ToDo: Do something with username
//   var email = $('#signup-email').val().trim() // ToDo: Check for real/valid email; regex?
//   var pass = $('#signup-password').val().trim()
  
//   var auth = firebase.auth() 
//   var promise = auth.createUserWithEmailAndPassword(email, pass)
  
//   $('#signup-username').val('')
//   $('#signup-email').val('')
//   $('#signup-password').val('')
//   promise.then(function(){
//     console.log('hi')
//   })
//   promise.catch(function(e) {
//     $('#signup-error').text(e.message).css('color', 'red')
    
//   })
// })
