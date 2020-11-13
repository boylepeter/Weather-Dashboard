
  // Initial array of movies
  var cities = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

  // Function for dumping the JSON content for each button into the div
  function displayCityInfo() {
    var cityName = $(this).attr("data-name")

    "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=ad335f06147c90f98edaa25f1c53d200";
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
      $("#cityInfo").text(JSON.stringify(response))
    // =================================================================
    })}

    // YOUR CODE GOES HERE!!! HINT: You will need to create a new div to hold the JSON.

  

  // Function for displaying movie data
  function renderButtons() {

    // Deleting the buttons prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < cities.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class of movie to our button
      a.addClass("city");
      // Adding a data-attribute
      a.attr("data-name", cities[i]);
      // Providing the initial button text
      a.text(cities[i]);
      // Adding the button to the buttons-view div
      $("#buttons-view").append(a);
    }
  }

  // This function handles events where one button is clicked
  $("#add-city").on("click", function(event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var city = $("#city-input").val().trim();

    // The movie from the textbox is then added to our array
    cities.push(city);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();

  });

  // Generic function for displaying the movieInfo
  $(document).on("click", ".city", displayMovieInfo);

  // Calling the renderButtons function to display the initial buttons
  renderButtons();

