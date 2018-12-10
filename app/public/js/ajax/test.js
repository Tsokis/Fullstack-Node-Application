const appKey = 'enter you api key id';
let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let country = document.querySelector(".country");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");
let customError = document.getElementById("error");



searchButton.addEventListener("click", fetchWeather);
//ajax request to target api
function fetchWeather(){
    if (searchInput.value === "") {
        customError.style.display = 'block';
        customError.innerHTML = "<p>You must enter something</p>"
        
    } else {
        customError.style.display = 'none';
        return fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchInput.value + '&units=metric'+
            '&appid=' + appKey)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                let name = data.name
                cityName.innerHTML = name;
                icon.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                temperature.innerHTML = data.main.temp + "°";
                humidity.innerHTML = data.main.humidity + "%";
                country.innerHTML = `Country ${data.sys.country}<br>
                 max:${data.main.temp_max}<br>
                 min:${data.main.temp_min}<br>
                 description today:${data.weather[0].description}`;
            })
            .catch(error => console.log(error));
    }
 }
   
    

    