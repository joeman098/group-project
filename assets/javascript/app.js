var type 
var query





function apicall(){
	var url = "https://api.themoviedb.org/3/search/"+type;
	url += '?' + $.param({ 
		'api_key':"d0c2f04f320fb6cdd3f0a8d64b919b67",
		"query": query,

	})


	$.ajax({
		url: url,
		method: "GET",
	
}).done(function(response) {
	console.log(response);
	console.log(response.results.length);
	for(var i = 0; response.results.length > i ; i++){
		
		var newRow = $("<tr>");
		var data = {
		poster: response.results[i].poster_path ,
		title: response.results[i].original_title ,
		overview: response.results[i].overview ,
		tvtitle:response.results[i].original_name,
		}
		// newData.text(data.title)
		newRow.append($("<td>").append($("<img>").attr("src","https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+data.poster)))
				.append($("<td>").text(data.title || data.tvtitle))
				.append($("<td>").attr("id","description").text(data.overview))
				.append($("<td>")).append($("<input>").attr("type","checkbox"));




		$("#resultTable").append(newRow);
	};
});
};



$(document).ready(function(){

$("#search").on("submit", function(event){
	event.preventDefault();
	query = $("#searchbar").val();
	type = $('input[name=searchType]:checked').val(); 
	console.log(type);
	console.log(query);
	apicall();
});


});