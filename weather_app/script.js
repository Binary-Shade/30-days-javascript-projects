const textBox = document.getElementById("search"); 
const btn = document.querySelector(".btn");
const error = document.getElementById("error");

function showLoader(){
    document.querySelector(".loader").style.display = "block";
    document.querySelector('.weather-app').classList.add("blur")
}

function hideLoader(){
    document.querySelector('.loader').style.display = "none";
    document.querySelector('.weather-app').classList.remove("blur")
}



const getWeather = async (cityName) => {
    const apiKey = "39ad58ede64fbef1bb0c99dde1d86c9b"; //-> api key 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`; //-> api url
    showLoader();
    const response = await fetch(apiUrl); //-> fetch operation
    const data = await response.json(); //-> json conversion
    hideLoader();
    console.log(response.status);
    //-> block to check the network error
    if(response.status === 404){
        error.textContent = "error while fetching weather ! check your internet connection or check city name";
        error.style.display = "block";
    }else{
        document.getElementById("city").textContent = data.name;
        document.getElementById("weather-indicator").textContent = data.weather[0].main;
        document.getElementById("temp").textContent = data.main.temp;
        document.getElementById("description").textContent = data.weather[0].description;
        document.getElementById("wind-show").textContent = data.wind.speed;
        document.getElementById("humidity-show").textContent = data.wind.speed;
        const img = document.getElementById("weather-img");
        
        //-> block to switch between images
        if (data.weather[0].main === "Clouds"){
            img.src = "/weather_app/img/clouds.png";
        }
        else if (data.weather[0].main === "Haze"){
            img.src = "/weather_app/img/mist.png";
        }
        else if (data.weather[0].main === "Snow"){
            img.src = "/weather_app/img/snow.png";
        }
        else if (data.weather[0].main === "Drizzle"){
            img.src = "/weather_app/img/drizzle.png";
        }
        else if (data.weather[0].main === "Rain"){
            img.src = "/weather_app/img/rain.png";
        }
        else if (data.weather[0].main === "Mist"){
            img.src = "/weather_app/img/mist.png";
        }
        else{
            img.src = "/weather_app/img/clear.png";
        };
    
    }
}
//-> button event listener
btn.addEventListener("click", ()=>{
    if(textBox.value === ""){
        error.textContent = "city name is empty !";
        error.style.display = "block";
    }else{
        error.style.display = "none";
        getWeather(textBox.value);
    }
})

