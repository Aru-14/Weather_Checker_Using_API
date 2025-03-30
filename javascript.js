const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

const apiKey = "e8e5ad3bb28e496bdab5742460a23df3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city) {
    const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerText=data.wind.speed+" kmph";
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
