let weatherBtn = document.querySelector("#Wbutton")
let winput = document.querySelector("#winput");

document.addEventListener('DOMContentLoaded', (async function()  {

let Response=await fetch("http://api.weatherapi.com/v1/forecast.json?key=d935b8e09823451abf3113924252706&q=cairo&days=3&aqi=no&alerts=no")
    

let data = await Response.json();
    console.log(data);
const today1 = new Date(data.forecast.forecastday[0].date);
const today2= new Date(data.forecast.forecastday[1].date);
const today3 = new Date(data.forecast.forecastday[2].date);
let days = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',' Friday', 'Saturday'];
let months = [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
let nambarday=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20","21","22","23","24","25","26","27","28","29","30","31"];
let monthName1 = months[today1.getMonth()];
let nambarday1= nambarday[today1.getDate()] ;
let dayName1 = days[today1.getDay()];
let dayName2 = days[today2.getDay()];
let dayName3 = days[today3.getDay()];
   // Update the HTML elements with the fetched data
      console.log(dayName1);
      console.log(dayName2);
      console.log(dayName3);
      let iconUrl0 = "https:" + data.current.condition.icon;
      let iconUrl1 = "https:" + data.forecast.forecastday[1].day.condition.icon;
      let iconUrl2 = "https:" + data.forecast.forecastday[2].day.condition.icon;

    
    document.querySelector("#day1").innerText = data.location.name;
    document.querySelector("#nambar-day").innerText = dayName1;
    document.querySelector(".name-month").innerText = monthName1;
    document.querySelector(".nambar-month").innerText = nambarday1;
    document.querySelector("#day2").innerText = dayName2;
    document.querySelector("#day3").innerText = dayName3;
    document.querySelector(".img-weather").innerHTML = `<img src="${iconUrl0}" />`;
    document.querySelector(".img-weather1").innerHTML = `<img src="${iconUrl1}" />`;                 
    document.querySelector(".img-weather2").innerHTML = `<img src="${iconUrl2}" />`;
    // Log the entire data object for debugging                 
    document.querySelector("#date-temp").innerText=data.current.temp_c + "°C";
    document.querySelector(".store-temp").innerText=data.forecast.forecastday[0].day.condition.text;
    document.querySelector(".store-temp1").innerText=data.forecast.forecastday[1].day.condition.text;
    document.querySelector(".store-temp2").innerText=data.forecast.forecastday[2].day.condition.text;
    document.querySelector(".max-temp").innerText= ` ${data.forecast.forecastday[1].day.maxtemp_c}°C`;
    document.querySelector(".min-temp").innerText=` ${data.forecast.forecastday[1].day.mintemp_c}° `;
    document.querySelector(".max-temp1").innerText= ` ${data.forecast.forecastday[2].day.maxtemp_c}°C`;
    document.querySelector(".min-temp1").innerText=` ${data.forecast.forecastday[2].day.mintemp_c}° `;
 
    
}));
winput.addEventListener('keydown', wlocation)
async function wlocation() {
let Response=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d935b8e09823451abf3113924252706&q=${winput.value}&days=3&aqi=no&alerts=no`)
    

let data = await Response.json();
    console.log(data);
const today1 = new Date(data.forecast.forecastday[0].date);
const today2= new Date(data.forecast.forecastday[1].date);
const today3 = new Date(data.forecast.forecastday[2].date);
let days = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',' Friday', 'Saturday'];
let months = [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
let nambarday=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20","21","22","23","24","25","26","27","28","29","30","31"];
let monthName1 = months[today1.getMonth()];
let nambarday1= nambarday[today1.getDate()] ;
let dayName1 = days[today1.getDay()];
let dayName2 = days[today2.getDay()];
let dayName3 = days[today3.getDay()];
   // Update the HTML elements with the fetched data
      console.log(dayName1);
      console.log(dayName2);
      console.log(dayName3);
      let iconUrl0 = "https:" + data.current.condition.icon;
      let iconUrl1 = "https:" + data.forecast.forecastday[1].day.condition.icon;
      let iconUrl2 = "https:" + data.forecast.forecastday[2].day.condition.icon;

    
    document.querySelector("#day1").innerText = data.location.name;
    document.querySelector("#nambar-day").innerText = dayName1;
    document.querySelector(".name-month").innerText = monthName1;
    document.querySelector(".nambar-month").innerText = nambarday1;
    document.querySelector("#day2").innerText = dayName2;
    document.querySelector("#day3").innerText = dayName3;
    document.querySelector(".img-weather").innerHTML = `<img src="${iconUrl0}" />`;
    document.querySelector(".img-weather1").innerHTML = `<img src="${iconUrl1}" />`;                 
    document.querySelector(".img-weather2").innerHTML = `<img src="${iconUrl2}" />`;
    // Log the entire data object for debugging                 
    document.querySelector("#date-temp").innerText=data.current.temp_c + "°C";
    document.querySelector(".store-temp").innerText=data.forecast.forecastday[0].day.condition.text;
    document.querySelector(".store-temp1").innerText=data.forecast.forecastday[1].day.condition.text;
    document.querySelector(".store-temp2").innerText=data.forecast.forecastday[2].day.condition.text;
    document.querySelector(".max-temp").innerText= ` ${data.forecast.forecastday[1].day.maxtemp_c}°C`;
    document.querySelector(".min-temp").innerText=` ${data.forecast.forecastday[1].day.mintemp_c}° `;
    document.querySelector(".max-temp1").innerText= ` ${data.forecast.forecastday[2].day.maxtemp_c}°C`;
    document.querySelector(".min-temp1").innerText=` ${data.forecast.forecastday[2].day.mintemp_c}° `;
}
