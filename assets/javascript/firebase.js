
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

  var password = $("#passwordReg").val().trim();
  var email = $("#emailReg").val().trim();
  console.log(email);

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
    // if(errorCode){
    //   $("#regFoot").append(errorCode + errorMessage);
    // }
  // ...
});
};
function onLogIn(){
  firebase.auth().onAuthStateChanged(function(user) {
    //all the loginshit goes here 

    if(user){

      }




});
}







$(document).ready(function(){

  $("#registerForm").on("submit", function(event){
    event.preventDefault();
    newAccount();
  });

});