const apikey ="4f32362bd5245cf6c8b801c4e3eeb5b1";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
let weatherIcon= document.querySelector(".weather-icon");
let backImg=document.querySelector(".card");
const d=new Date();

async function checkWeather(city){
    let response= await fetch(apiUrl+city+`&appid=${apikey}`);
    let data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c"
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%"
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h"
    document.querySelector(".date").innerHTML=d.toLocaleDateString();
    document.querySelector(".time").innerHTML=d.toLocaleTimeString();
    document.querySelector(".feel").innerHTML="Feels Like"+data.main.feels_like+"°c";
    document.querySelector(".description").innerHTML=data.weather[0].description;

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "images/clouds.png";
        backImg.style.backgroundImage="url(images/Clouds.gif)";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
        backImg.style.backgroundImage="url(images/Clear.gif)";
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
        backImg.style.backgroundImage="url(images/drizzlee.gif)";
    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
        backImg.style.backgroundImage="url(images/mist.gif.jpg)";
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
        backImg.style.backgroundImage="url(images/rain.gif)";
    }else if(data.weather[0].main=="Haze"){
        weatherIcon.src="images/haze1.png";
        backImg.style.backgroundImage="url(images/haze.gif)";
    }else if(data.weather[0].main=="Snow"){
        weatherIcon.src="images/snow.png";
        backImg.style.backgroundImage="url(images/snowfall.gif)";
    }
    document.querySelector(".weather").style.display="block";
    
}
searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
});
searchBox.addEventListener('keydown',(event)=>{
 if(event.key ==="Enter"){
    checkWeather(searchBox.value);
 };
});

