var searchInpuT = $('#fetch-button');

var cityInput = $('#city-name');

var searchList;

var savedCity = JSON.parse(localStorage.getItem('savedSearch'));

// check for localstorage
var savedSearch;

if (savedCity===null) {
  savedCity = [];
} else {
  $('.search-history').text(savedCity)
}


function displayWeather(cityName) {
  var Url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=21a21be43c54996c1ddabd8fb92b86e3&units=imperial"

  fetch(Url)
    .then(function (response) {
      return response.json();
    })


    // create an function that pulls the value from a specific list of data
    .then(function (data) {
      console.log(savedCity.indexOf(cityName));
      console.log(cityName);
      console.log(savedCity)
      if (savedCity.includes(cityName) === false && cityName.length > 0) {
        savedCity.push(cityName)
        localStorage.setItem('savedSearch', JSON.stringify(savedCity));
        disaplayHistory()
      }


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


// check for the value enter in the search
var cityLocation = (event) => {
  event.preventDefault();
  cityName = cityInput.val()
  if (cityName === null) {
    return
  };
  console.log(cityLocation);
  displayWeather(cityName);




}

function disaplayHistory(event) {
  $('.search-history').empty()
  for (i = savedCity.length - 1; i >= 0; i--) {
    $('.search-history').append('<li> <button class = "btn" >' + savedCity[i] + '</button> </li>');
  }
  $('.btn').on('click', function (event) {
    event.preventDefault()
  
    var cityName = $(event.target).text().trim()
    displayWeather(cityName)
  })
}

disaplayHistory()

// create an click event for the search button
searchInpuT.on('click', cityLocation); 