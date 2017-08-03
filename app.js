


var gifs = ["toy story", "monsters inc", "lion king", "bugs bunny", "micky mouse", "donald duck", "adventure time", "sponge bob", "peppa pig", "rug rats"];




//displaying the gifs
 	function displayGif() {
	  var gif = $(this).attr("data-name"); 
	  var queryURL = "https://api.giphy.com/v1/gifs/search?q="+gif+"&api_key=dc6zaTOxFJmzC&limit=10";  

       
        
        // Creating an AJAX call for the specific gif button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	var results = response.data;
        	console.log(response);
        	for (var i = 0; i < results.length; i++) {
        	//new div to display responses
        	var  gifDiv = $("<div class='gify'>");
        	//var holding rating	
        	var rating = results[i].rating;
        	//element to  display rating
        	var rate = $("<p>").text("Rated: " + rating);
        	//appending rating to div
      		gifDiv.append(rate);
       
      		//sets a variable to the img location in the object
        	var imgGif = results[i].images.fixed_height.url;
			//pulls the image from the json
        	var img = $("<img>").attr("src",imgGif);

        	gifDiv.append(img);

        	//appending new div to id
        	$("#10gifs").prepend(gifDiv);
     		}
      
		});
        
	}

//making the buttons
	function buttons(){
		//avoid repeat buttons
		$("#gifs-button").empty();
		
		//loop for buttons
		for (var i = 0; i < gifs.length; i++) {

		var giphy = $("<button>");

		giphy.addClass("gif");

		giphy.attr("data-name", gifs[i]);

		giphy.text(gifs[i]);



		$("#gifs-button").append(giphy);

		}
	}

	$("#add-gif").on("click", function(event) {	
		event.preventDefault();
		//this line grabs input
		var gif = $("#gif-input").val().trim();
		//adds the gif to the array
		gifs.push(gif);

		buttons()


	})
//
 	$(document).on("click", ".gif", displayGif);

buttons()	


