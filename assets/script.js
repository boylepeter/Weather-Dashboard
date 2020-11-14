      // Initial array of cities
      var cities = ["Charlotte", "New York", "San Diego", "Jacksonville"];

      // Function for dumping the JSON content for each button into the div
      function displaycityInfo() {
        var cityName = $(this).attr("data-name")
        $("#cityDisplay").text(cityName)
       
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=ad335f06147c90f98edaa25f1c53d200";
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            $("#cityInfo").empty()
            console.log(response)
            var tempF = Math.round(((response.main.temp -273) * 9)/5 + 32)
            var tempDiv = $("<div>");
            $(tempDiv).addClass("respoInfo");
            $(tempDiv).append("Temperature: ").append(tempF);
            $("#cityInfo").append(tempDiv);
          
            var humidDiv = $("<div>");
            $(humidDiv).addClass("respoInfo");
            $(humidDiv).append("Humidity: ").append(JSON.stringify(response.main.humidity));
            $("#cityInfo").append(humidDiv);
           

            var windDiv = $("<div>");
            $(windDiv).addClass("respoInfo");
            $(windDiv).append("Wind Speed:").append(JSON.stringify(response.wind.speed));
            $("#cityInfo").append(windDiv);
           
            
            var descDiv = $("<div>");
            $(descDiv).addClass("respoInfo");
            $(descDiv).append("Description: ").append(JSON.stringify(response.weather[0].description));
            $("#cityInfo").append(descDiv);
           
        // =================================================================
        })
    
        apiKey = "686da703dfc347de905a811d9f623386";
        var queryURL= "https://api.weatherbit.io/v2.0/forecast/hourly?city=" + cityName + "&key=" + apiKey +"&hours=48";
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            console.log(response)
            function fillDay1(){
                $("#day1").empty()
                var tempF = Math.round(((response.data[0].app_temp) * (9/5) + 32))
                var tempDiv = $("<div>");
                $(tempDiv).addClass("dayInfo");
                $(tempDiv).append("Temperature: ").append(tempF).before("<br>");
                $("#day1").append(tempDiv);
              
                var uvDiv = $("<div>");
                $(uvDiv).addClass("dayInfo");
                $(uvDiv).append("UV: ").append(JSON.stringify(response.data[0].uv)).before("<br>");
                $("#day1").append(uvDiv);
    
                var windDiv = $("<div>");
                $(windDiv).addClass("dayInfo");
                $(windDiv).append("Wind Speed:").append(JSON.stringify(response.data[0].wind_spd)).before("<br>");
                $("#day1").append(windDiv);
            }
            function fillDay2(){
                $("#day2").empty()
                var tempF = Math.round(((response.data[24].app_temp) * (9/5) + 32))
                var tempDiv = $("<div>");
                $(tempDiv).addClass("dayInfo");
                $(tempDiv).append("Temperature: ").append(tempF).before("<br>");
                $("#day2").append(tempDiv);
              
                var uvDiv = $("<div>");
                $(uvDiv).addClass("dayInfo");
                $(uvDiv).append("UV: ").append(JSON.stringify(response.data[24].uv)).before("<br>");
                $("#day2").append(uvDiv);
    
                var windDiv = $("<div>");
                $(windDiv).addClass("dayInfo");
                $(windDiv).append("Wind Speed:").append(JSON.stringify(response.data[24].wind_spd)).before("<br>");
                $("#day2").append(windDiv);
            }
            function fillDay3(){
                $("#day3").empty()
                var tempF = Math.round(((response.data[47].app_temp) * (9/5) + 32))
                var tempDiv = $("<div>");
                $(tempDiv).addClass("dayInfo");
                $(tempDiv).append("Temperature: ").append(tempF).before("<br>");
                $("#day3").append(tempDiv);
              
                var uvDiv = $("<div>");
                $(uvDiv).addClass("dayInfo");
                $(uvDiv).append("UV: ").append(JSON.stringify(response.data[47].uv)).before("<br>");
                $("#day3").append(uvDiv);
    
                var windDiv = $("<div>");
                $(windDiv).addClass("dayInfo");
                $(windDiv).append("Wind Speed:").append(JSON.stringify(response.data[47].wind_spd)).before("<br>");
                $("#day3").append(windDiv);
            }
            fillDay1()
            fillDay2()
            fillDay3()
    })}

     

      

      // Function for displaying city data
      function renderButtons() {

        // Deleting the buttons prior to adding new cities
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of cities
        for (var i = 0; i < cities.length; i++) {

          // Then dynamicaly generating buttons for each city in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of city to our button
          a.addClass("city");
          // Adding a data-attribute
          a.attr("data-name", cities[i]);
          // Providing the initial button text
          a.text(cities[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").prepend(a);
        }
      }

      // This function handles events where one button is clicked
      $("#add-city").on("click", function(event) {
        event.preventDefault();

        // This line grabs the input from the textbox
        var city = $("#city-input").val().trim();

        // The city from the textbox is then added to our array
        cities.push(city);

        // Calling renderButtons which handles the processing of our city array
        renderButtons();

      });

      // Generic function for displaying the cityInfo
      $(document).on("click", ".city", displaycityInfo);

      // Calling the renderButtons function to display the initial buttons
      renderButtons();