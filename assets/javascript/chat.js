var idlist =  [];

function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')
        [0].scrollHeight;
};


function displayProfile(id, type){



	 var url = "https://api.themoviedb.org/3/"+type +"/"+id;
		url += '?' + $.param({ 
		'api_key':"d0c2f04f320fb6cdd3f0a8d64b919b67",
	});


	$.ajax({
		url: url,
		method: "GET",
	
}).done(function(response) {
			var newDiv = $("<div>");
			var newImg = $("<img>");
			newDiv.attr("id", "profileDiv" )
			newDiv.attr("value",id);
			newDiv.addClass("card");
  	  		newDiv.append($("<button>").text("remove").addClass("btn-info").attr("id","removeButton"));
  	  		newImg.attr("src","https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+response.poster_path);
  	  		newDiv.append(newImg);
  	  		$("#profileDump").append(newDiv);

// $("#profileDump").append($("<img>").attr("src","https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+response.poster_path));
});

};



function onAir(id){
	page = 1

	var url = "https://api.themoviedb.org/3/tv/airing_today";
	url += '?' + $.param({ 
		'api_key':"d0c2f04f320fb6cdd3f0a8d64b919b67",
		'language':"en-US",
		"page": page ,

	});

	$.ajax({
		url: url,
		method: "GET",
	
}).done(function(response) {

	numberid =  idlist.map(Number);
	
	$("#airDump").empty();
	for(i = 0 ; response.results.length > i ; i++){
		if(numberid.includes(response.results[i].id)){
			$("#airDump").append($("<img>").attr("src","https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+response.results[i].poster_path));

		};
	};

});


};











var itemid;







var uidref = localStorage.getItem("uid");
var profileRef = firebase.database().ref("/profile/" + uidref);


    chatRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });

     profileRef.on('child_added', function(snapshot){
     	itemid = snapshot.val();
     	idlist.push(itemid.id);
     	displayProfile(itemid.id, itemid.typeid);
     	onAir();
     });


 	profileRef.on("value",function(snapshot){
 		idList =snapshot.val();
 		console.log(idList);

 		
 	})
 





$(document).ready(function(){
  $('#messageInput').keypress(function (event) {
        if (event.keyCode == 13) {
          var name = email ;
          var text = $('#messageInput').val();
          chatRef.push({name: name, text: text});
          $('#messageInput').val('');
        }
      });
  $("#profileDump").on("click","#profileDiv",function(){
  	id = $(this).attr("value");
  	var idstring = id.toString();
  	var x = idlist.indexOf(idstring)
  	idlist.splice(x,1);
  	console.log(idlist);
  	console.log(id);
  

  	var ref =firebase.database().ref("/profile/" + uid)

  	ref.orderByChild('id').equalTo(id)
    .once('value').then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        //remove each child
        ref.child(childSnapshot.key).remove();
    });
});
	$(this).html("#profileDiv").remove();


onAir();
  });






});

