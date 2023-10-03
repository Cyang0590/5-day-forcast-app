var searchInpuT = $('#fetch-button');

var cityInput= $('#city-name');

// check for localstorage
var savedCity = localStorage.getItem('savedSearch');
    if (localStorage.getItem('savedSearch') === null) {
      localStorage.getItem('savedSearch', '');
      
};

// check for the value enter in the search
var cityLocation = (event) => {
  event.preventDefault();
    cityName = cityInput.val()
    if (cityName === null) {
        return
    };
    console.log(cityLocation);
   
    // fetch the weather api and return the respose
    var Url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=21a21be43c54996c1ddabd8fb92b86e3&units=imperial"

    fetch(Url)
      .then(function (response) {
        return response.json();
      })

      
      // create an function that pulls the value from a specific list of data
      .then(function (data) {

        $(".cityN").text(cityName + " (" + data.list[0].dt_txt + ") ")
        $(".cityN-1").text(cityName + " (" + data.list[4].dt_txt + ") ")
        $(".cityN-2").text(cityName + " (" + data.list[12].dt_txt + ") ")
        $(".cityN-3").text(cityName + " (" + data.list[20].dt_txt + ") ")
        $(".cityN-4").text(cityName + " (" + data.list[28].dt_txt + ") ")
        $(".cityN-5").text(cityName + " (" + data.list[36].dt_txt + ") ")
        

        $('#wicon').attr('src', "https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png");
        $('#wicon-1').attr('src', "https://openweathermap.org/img/w/" + data.list[4].weather[0].icon + ".png");
        $('#wicon-2').attr('src', "https://openweathermap.org/img/w/" + data.list[12].weather[0].icon + ".png");
        $('#wicon-3').attr('src', "https://openweathermap.org/img/w/" + data.list[20].weather[0].icon + ".png");
        $('#wicon-4').attr('src', "https://openweathermap.org/img/w/" + data.list[28].weather[0].icon + ".png");
        $('#wicon-5').attr('src', "https://openweathermap.org/img/w/" + data.list[36].weather[0].icon + ".png");

        $("#temp").text("Temperture: " + data.list[0].main.temp + " °F");
        $("#temp-1").text("Temperture: " + data.list[4].main.temp + " °F");
        $("#temp-2").text("Temperture: " + data.list[12].main.temp + " °F");
        $("#temp-3").text("Temperture: " + data.list[20].main.temp + " °F");
        $("#temp-4").text("Temperture: " + data.list[28].main.temp + " °F");
        $("#temp-5").text("Temperture: " + data.list[36].main.temp + " °F");

        $("#wind").text("Wind Speed: " + data.list[0].wind.speed + " MPH");
        $("#wind-1").text("Wind Speed: " + data.list[4].wind.speed + " MPH");
        $("#wind-2").text("Wind Speed: " + data.list[12].wind.speed + " MPH");
        $("#wind-3").text("Wind Speed: " + data.list[20].wind.speed + " MPH");
        $("#wind-4").text("Wind Speed: " + data.list[28].wind.speed + " MPH");
        $("#wind-5").text("Wind Speed: " + data.list[36].wind.speed + " MPH");

        $("#humin").text("Humidity: " + data.list[0].main.humidity + " %");
        $("#humin-1").text("Humidity: " + data.list[4].main.humidity + " %");
        $("#humin-2").text("Humidity: " + data.list[12].main.humidity + " %");
        $("#humin-3").text("Humidity: " + data.list[20].main.humidity + " %");
        $("#humin-4").text("Humidity: " + data.list[28].main.humidity + " %");
        $("#humin-5").text("Humidity: " + data.list[36].main.humidity + " %");
        console.log(data);
      });
    
      
}


// create an click event for the search button
searchInpuT.on('click', cityLocation) 