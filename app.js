const apiKey = "128cc6a4986754811fd13923947493fb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";

const search = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcons = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
    let data = await response.json();
    if(response.status == 404){
        document.querySelector(".error").style.display= "block";
        document.querySelector(".weather").style.display= "none";
    } else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "F&deg;";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed )+ "mph";
    
        if(data.weather[0].main == "Clear"){
            weatherIcons.src="images/clear.png";
        }
        else if(data.weather[0].main == "Clouds" ){
            weatherIcons.src="images/clouds.png";
        }
        else if(data.weather[0].main == "Drizzle" ){
            weatherIcons.src="images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist" ){
            weatherIcons.src="images/mist.png";
        }
        else if(data.weather[0].main == "Rain" ){
            weatherIcons.src="images/rain.png";
        }
        else if(data.weather[0].main == "Snow" ){
            weatherIcons.src="images/snow.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display= "none";
         
    }
    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "F&deg;";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed )+ "mph";

    if(data.weather[0].main == "Clear"){
        weatherIcons.src="images/clear.png";
    }
    else if(data.weather[0].main == "Clouds" ){
        weatherIcons.src="images/clouds.png";
    }
    else if(data.weather[0].main == "Drizzle" ){
        weatherIcons.src="images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist" ){
        weatherIcons.src="images/mist.png";
    }
    else if(data.weather[0].main == "Rain" ){
        weatherIcons.src="images/rain.png";
    }
    else if(data.weather[0].main == "Snow" ){
        weatherIcons.src="images/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
  

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(search.value)
})

