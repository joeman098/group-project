
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD3zF1DiIcshvX-XaIanXeT87eczLA70nY",
    authDomain: "groupproject-2b51c.firebaseapp.com",
    databaseURL: "https://groupproject-2b51c.firebaseio.com",
    projectId: "groupproject-2b51c",
    storageBucket: "groupproject-2b51c.appspot.com",
    messagingSenderId: "463699429487"
  };
  firebase.initializeApp(config);


function newAccount(){

  var password = $("#passwordInput").val().trim();
  var email = $("#emailInput").val().trim();
  console.log(email);

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
};

$(document).ready(function(){

  $("#registerForm").on("submit", function(event){
     event.preventDefault();
     test = $('input[id=passwordInput]:value').val();
    console.log(test);
    newAccount();
  });

});