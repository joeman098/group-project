
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

  var chatRef = firebase.database().ref("/chat");
  var profileRef = firebase.database().ref("/profile/" + uid);
  var displayName
  var email
  var photoURL
  var isAnonymous
  var providerData
  var uid

  var loged = false ;












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
      alert("HAHA")
        // User is signed in.
    displayName = user.displayName;
    email = user.email;
    emailVerified = user.emailVerified;
    photoURL = user.photoURL;
    isAnonymous = user.isAnonymous;
    uid = user.uid;
    providerData = user.providerData;
    loged = true;

    // ...
          } 
else {
    loged = false;
      }




});
}


function logIn(){
  var email = $("#emailInput").val();
  var password = $("#passwordInput").val();

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
};

function logOut(){
firebase.auth().signOut().then(function() {
  location.reload();
}).catch(function(error) {
  // An error happened.
});
};




$(document).ready(function(){

  $("#registerForm").on("submit", function(event){
    event.preventDefault();
    newAccount();
  });

  $("#logIn").on("submit",function(event){
     event.preventDefault();
     logIn();
    });


$("#logOut").on("click", function(){
  logOut();
});




  
onLogIn();
});

