var gifs = ["toy story", "monsters inc", "lion king", "bugs bunny", "micky mouse", "donald duck", "adventure time", "sponge bob", "peppa pig"]
//making the buttons
function buttons(){

	$("#gifs-button").empty();

	for (var i = 0; i < gifs.length; i++) {

	var gifButton = $("<button>").
		text(gifs[i])
		
		.appendTo("#gifs-button").empty;
	}
}