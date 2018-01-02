
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
  var displayName
  var email
  var photoURL
  var isAnonymous
  var providerData












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
    // ...
          } 
else {
    // User is signed out.
    // ...
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

function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')
        [0].scrollHeight;
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

  $('#messageInput').keypress(function (event) {
        if (event.keyCode == 13) {
          var name = email ;
          var text = $('#messageInput').val();
          chatRef.push({name: name, text: text});
          $('#messageInput').val('');
        }
      });



        chatRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });


  
onLogIn();
});
  chatRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });