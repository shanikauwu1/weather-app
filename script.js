const apiKey ="7a2e01155bf2a4fc836a19d9f99380bc";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

const searchBox =document.querySelector(".searchbox input");
const searchBtn =document.querySelector(".searchbox button");

async function checkWeather(city) {
const response=await fetch(apiUrl+`&appid=${apiKey}&q=${city}`);
const data =await response.json();

// error handling
if(response.status==404){
    document.querySelector('.error').style.display="block";
}
else{
    document.querySelector('.error').style.display="none";
}

//console.log(data);
const cityName=data.name;
const temparature=data.main['temp'];
const wind= data.wind['speed'];
const humidity =data.main['humidity'];
const feels=data.main['feels_like'];
const icon=data.weather[0]['icon'];


document.querySelector("#city-name").innerHTML = cityName;
document.querySelector(".wind-speed").innerHTML=wind+' Km/h';
document.querySelector('.humidity').innerHTML=humidity+'%';
document.querySelector('.tempture').innerHTML=Math.round(temparature);
document.querySelector('.feels-tempture').innerHTML=Math.round(feels);


// img add

var imgIcon = document.createElement("img");
imgIcon.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;

document.getElementById("img-div").innerHTML = "";
document.getElementById("img-div").appendChild(imgIcon);


}

window.addEventListener("DOMContentLoaded", (event) => {
    var city="New york";
    const el = document.getElementById('serchBtn');
    const searchBoxValue =document.getElementById("cityName");

    if (el) {
      el.addEventListener('click', ()=>{
       city=searchBoxValue.value;
       //alert(city);
       checkWeather(city); 
      });
    }
    
});

checkWeather("Regina");


