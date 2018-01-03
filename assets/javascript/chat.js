function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')
        [0].scrollHeight;
};
function displayProfile(id){
	 $("#profileDump").append($("<button>").text(id));
};

var uidref = localStorage.getItem("uid");
var profileRef = firebase.database().ref("/profile/" + uidref);


    chatRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });

     profileRef.on('child_added', function(snapshot){
     	var itemid = snapshot.val();
     	console.log(itemid);
     	displayProfile(itemid.id);
     });








$(document).ready(function(){
console.log(window.uid);
  $('#messageInput').keypress(function (event) {
        if (event.keyCode == 13) {
          var name = email ;
          var text = $('#messageInput').val();
          chatRef.push({name: name, text: text});
          $('#messageInput').val('');
        }
      });
console.log(profileRef);

});

