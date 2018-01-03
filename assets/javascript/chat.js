function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')
        [0].scrollHeight;
};


function displayProfile(id, type){

console.log(type);
console.log(id);



	 var url = "https://api.themoviedb.org/3/"+type +"/"+id;
	 console.log(url);
		url += '?' + $.param({ 
		'api_key':"d0c2f04f320fb6cdd3f0a8d64b919b67",
	});


	$.ajax({
		url: url,
		method: "GET",
	
}).done(function(response) {
console.log(response);
$("#profileDump").append($("<img>").attr("src","https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+response.poster_path));
});




//end
};






var uidref = localStorage.getItem("uid");
var profileRef = firebase.database().ref("/profile/" + uidref);


    chatRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });

     profileRef.on('child_added', function(snapshot){
     	var itemid = snapshot.val();
     	
     	displayProfile(itemid.id, itemid.typeid);
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

