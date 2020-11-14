      // Initial array of cities
      var cities = ["Charlotte", "New York", "San Diego", "Jacksonville"];

      function displaycityInfo() {
        var cityName = $(this).attr("data-name")
        $("#cityDisplay").text(cityName)
        $("#cityDate").text(moment().format('MMMM Do YYYY, h:mm a'))

        localStorage.setItem("lastCity", cityName)
        console.log(cityName)
        //localStorage.getItem("lastCity")
       //API call for current weather along with population function for data returned
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

            var cloud = response.clouds.all
            console.log(cloud)
            if (cloud < 40){
                $("#cityInfo").prepend("<img src='assets/images/sunny.jpg' style='width: 40px'>")
            }
            else if (40 < cloud < 70){
                $("#cityInfo").prepend("<img src='assets/images/slightly.jpg' style='width: 40px'>")
            }
            else {$("#cityInfo").prepend("<img src='assets/images/cloudy.png' style='width: 40px'>")}
        })
        //Query for forecast as doubling of API calls was not possible.
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
                $("#day1").text("  4 Hours")
                $(tempDiv).append("Temperature: ").append(tempF).before("<br>");
                $("#day1").append(tempDiv);
              
                var uvDiv = $("<div>");
                $(uvDiv).addClass("dayInfo");
                $(uvDiv).append("UV: ").append(response.data[0].uv).before("<br>");
                $("#day1").append(uvDiv);
                var UV = response.data[0].uv
                if (UV <2){
                    $(uvDiv).attr("style", "background-color: green")
                }
                else if (2 < UV < 7){
                    $(uvDiv).attr("style", "background-color: yellow")
                }
                else {$(uvDiv).attr("style", "background-color: red")}
    
                var windDiv = $("<div>");
                $(windDiv).addClass("dayInfo");
                $(windDiv).append("Wind Speed: ").append(JSON.stringify(response.data[0].wind_spd)).before("<br>");
                $("#day1").append(windDiv);

                var cloud = response.data[0].clouds
                if (cloud < 40){
                    $("#day1").prepend("<img src='assets/images/sunny.jpg' style='width: 40px'>")
                }
                else if (40 < cloud < 70){
                    $("#day1").prepend("<img src='assets/images/slightly.jpg' style='width: 40px'>")
                }
                else {$("#day1").prepend("<img src='assets/images/cloudy.png' style='width: 40px'>")}
            }
            function fillDay2(){
                $("#day2").empty()
                var tempF = Math.round(((response.data[20].app_temp) * (9/5) + 32))
                var tempDiv = $("<div>");
                $(tempDiv).addClass("dayInfo");
                $("#day2").text("  24 Hours")
                $(tempDiv).append("Temperature: ").append(tempF).before("<br>");
                $("#day2").append(tempDiv);
              
                var uvDiv = $("<div>");
                $(uvDiv).addClass("dayInfo");
                $(uvDiv).append("UV: ").append(JSON.stringify(response.data[20].uv)).before("<br>");
                $("#day2").append(uvDiv);
                var UV = response.data[20].uv
                if (UV <2){
                    $(uvDiv).attr("style", "background-color: green")
                }
                else if (2 < UV < 7){
                    $(uvDiv).attr("style", "background-color: yellow")
                }
                else {$(uvDiv).attr("style", "background-color: red")}

                var windDiv = $("<div>");
                $(windDiv).addClass("dayInfo");
                $(windDiv).append("Wind Speed: ").append(JSON.stringify(response.data[20].wind_spd)).before("<br>");
                $("#day2").append(windDiv);

                var cloud = response.data[20].clouds
                if (cloud < 40){
                    $("#day2").prepend("<img src='assets/images/sunny.jpg' style='width: 40px'>")
                }
                else if (40 < cloud < 70){
                    $("#day2").prepend("<img src='assets/images/slightly.jpg' style='width: 40px'>")
                }
                else {$("#day2").prepend("<img src='assets/images/cloudy.png' style='width: 40px'>")}
            }
            function fillDay3(){
                $("#day3").empty()
                var tempF = Math.round(((response.data[44].app_temp) * (9/5) + 32))
                var tempDiv = $("<div>");
                $(tempDiv).addClass("dayInfo");
                $("#day3").text("  48 Hours")
                $(tempDiv).append("Temperature: ").append(tempF).before("<br>");
                $("#day3").append(tempDiv);
              
                var uvDiv = $("<div>");
                $(uvDiv).addClass("dayInfo");
                $(uvDiv).append("UV: ").append(JSON.stringify(response.data[44].uv)).before("<br>");
                $("#day3").append(uvDiv);
                var UV = response.data[44].uv
                if (UV <2){
                    $(uvDiv).attr("style", "background-color: green")
                }
                else if (2 < UV < 7){
                    $(uvDiv).attr("style", "background-color: yellow")
                }
                else {$(uvDiv).attr("style", "background-color: red")}
    
                var windDiv = $("<div>");
                $(windDiv).addClass("dayInfo");
                $(windDiv).append("Wind Speed: ").append(JSON.stringify(response.data[44].wind_spd)).before("<br>");
                $("#day3").append(windDiv);

                var cloud = response.data[44].clouds
                if (cloud < 40){
                    $("#day3").prepend("<img src='assets/images/sunny.jpg' style='width: 40px'>")
                }
                else if (40 < cloud < 70){
                    $("#day3").prepend("<img src='assets/images/slightly.jpg' style='width: 40px'>")
                }
                else {$("#day3").prepend("<img src='assets/images/cloudy.png' style='width: 40px'>")}
            }
            fillDay1()
            fillDay2()
            fillDay3()
    })}

     

      

//create buttons for each item in the cities array after emptying to avoid doubling
      function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < cities.length; i++) {
          var a = $("<button>");
          a.addClass("city");
          a.attr("data-name", cities[i]);
          a.text(cities[i]);
          $("#buttons-view").prepend(a);
        }
      }
//add new city to the array via click on add city button
      $("#add-city").on("click", function(event) {
        event.preventDefault();
        var city = $("#city-input").val().trim();
        cities.push(city);
        renderButtons();
      });


      $(document).on("click", ".city", displaycityInfo);

      //$(document).on("load", displaycityInfo((localStorage.getItem("lastCity")))); attempted recovery of last city cannot be 
      //accomplished while maintaining data attribute, this makes it unable to return through the displaycityinfo function
      

      renderButtons();
