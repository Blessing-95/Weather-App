let city=document.querySelector('.city');
let humidity=document.querySelector('.humidity');
let temp=document.querySelector('.temp');
let windSpeed=document.querySelector('.wind');
const weatherIcon=document.querySelector('.weather-icon')

const weatherPage=document.querySelector('.weather')
const searchBox=document.querySelector('.search-box input')
const searchBtn=document.querySelector('.search-box button')

const pageError=document.querySelector('.error')

const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const apiKey="518fa5dae5a0a1880a60d01baa71ddae"

async function checkWeather(mycity) {
   
    const response= await fetch(apiUrl + mycity + `&appid=${apiKey}`);
    
    if (response.status==404) {
        pageError.style.display="block"
        // Set a timeout for 3 seconds (3000 milliseconds)
setTimeout(function() {
  pageError.style.display="none"
  console.log("Timeout executed!");
}, 3000);
    }
    else{
    var data=await response.json();
    console.log(JSON.stringify(data, null, 2));
    
    city.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity +" %";
    temp.innerHTML=Math.round(data.main.temp) + "°C";
    windSpeed.innerHTML=data.wind.speed + " km/h";
    
    if(data.weather[0].main=="Clouds") {
        weatherIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear") {
        weatherIcon.src="images/clear.png"
    }
   else if(data.weather[0].main=="Rain"){
       weatherIcon.src="images/rain.png"
   }
   else if(data.weather[0].main=="Drizzle") {
        weatherIcon.src="images/drizzle.png"
    }
   else if(data.weather[0].main=="Mist"){
       weatherIcon.src="images/mist.png"
   }
  } 
}
searchBtn.addEventListener('click',()=>{
    
    if (searchBox.value=="") {
        pageError.style.display="block"
        // Set a timeout for 3 seconds (3000 milliseconds)
setTimeout(function() {
  pageError.style.display="none"
  console.log("Timeout executed!");
}, 3000);
    }
    
    else {
        
        checkWeather(searchBox.value);
    }
})

