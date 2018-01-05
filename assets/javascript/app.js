var type 
var query
var geoData 
var testurl = $(location).attr("href");
console.log(testurl);
var splitUrl =testurl.split(/[^A-Za-z]/);
console.log(splitUrl);


function homeSearch(){
	type = splitUrl[15];
	query = splitUrl[13];
	apicall();
}

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
		date:response.results[i].release_date,
		tvdate:response.results[i].first_air_date,
		id:response.results[i].id
		}
		// newData.text(data.title)
	



		newRow.append($("<td>").append($("<img>").attr("src","https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+data.poster)))
				.append($("<td id='title'>").html((data.title || data.tvtitle) +"<br>"+ (data.date|| data.tvdate)))
				.append($("<td>").attr("id","description").text(data.overview))
				.append($("<td>").append($("<button>").text("save").addClass("btn-info").attr("id","saveButton").attr("value",data.id).attr("data",type)));

				if(!loged){
					$("#saveButton").attr("id","notloged").text("log In to save");
				}



		$("#resultTable").append(newRow);

		
	};

});
};

function geoData(){
		$.ajax({
		url: "https://timezoneapi.io/api/ip",
		method: "GET",
	
}).done(function(response) {
	 geoData = response ;
	console.log(geoData);
	$("#creep").text("From: " +geoData.data.ip);
	// weather();
});
}

function weather(){
	var url = "api.openweathermap.org/data/2.5/weather"
	url += '?' + $.param({ 
		'APPID':"192ef565f6f726a026cab22fe6ad49c8",
		"zip": geoData.data.postal,

	})


	$.ajax({
		url: url,
		method: "GET",
	
}).done(function(response) {
	console.log(response);

});
};
$(document).ready(function(){

$("#search").on("submit", function(event){
	event.preventDefault();
	$("#resultTable").empty();
	query = $("#searchbar").val();
	type = $('input[name=searchType]:checked').val(); 
	console.log(type);
	console.log(query);
	apicall();
	$("#searchbar").val('');
	// if(loged){
	// $("#container").append($("<button>").text("save").addClass("btn-info").attr("id","saveButton"));
 // };
});

	$("#resultTable").on("click","#saveButton", function(){
			
			var id = this.value;
			var typeid = $(this).attr("data");
			console.log(id);
			console.log(typeid);
			console.log(email);

			profileRef.push().set({
				id : id,
				typeid : typeid,
				
			});
		
       

            
		
		});

geoData();
});