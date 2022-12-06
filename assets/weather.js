var apiKey = "b711981b9768551b14c4803eeb3cca40"

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&cnt=3&appid=${apiKey}`)
  .then((response) => response.json())
  .then((data) => console.log(data));
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// function renderHelper(city, data) {
//   app.fetchWeather(city)
// }
// function fetchFive(location) {
//   var {lat} = location;
//   var {lon} = location;
//   var cityName = location.name
//   var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
//   fetch(apiUrl)
//   .then(x => x.json())
//   .then(data => {
//     // app.fetchWeather(cityName),
//     console.log(app.fetchWeather(cityName), data)
//   })
// }
  const app = {
    init: () => {
      document
        .getElementById('btnGet')
        .addEventListener('click', app.fetchCurrentWeather);
      
    },
    fetchCurrentWeather: (ev) => {
      let city = document.getElementById('city').value;
      console.log(city)
      let lang = 'en';
      let units = 'imperial';
      let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`;
       const fetchReq1 = fetch(url)
        .then((resp) => {
          if (!resp.ok) throw new Error(resp.statusText);
          return resp.json();
        })
        const fetchReq2 = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`)
        .then((resp) => {
          if (!resp.ok) throw new Error(resp.statusText);
          return resp.json();
        })
        const allData = Promise.all([fetchReq1, fetchReq2]);
        allData.then((data) => {
          app.showWeather(data);
        })
        .catch(console.err);
    },

    showWeather: (resp) => {
      console.log(resp);
      let row = document.querySelector('.weather.row');

//var for the weather data
 let temp = resp[1].main.temp
console.log(temp)
let highTemp = resp[1].main.temp_max
console.log(highTemp)
let lowTemp = resp[1].main.temp_min
console.log(lowTemp)
let wind = resp[1].wind.speed
let humidity =  resp[1].main.humidity
console.log(humidity)
let secondTemp = resp[0].list[5].main.temp
console.log(secondTemp)
let secondHigh = resp[0].list[5].main.temp_max
let secondLow = resp[0].list[5].main.temp_min
let secondWind = resp[0].list[5].wind.speed
console.log("Hell yeah Billy Joel reference")
let secondHumidity = resp[0].list[5].main.humidity
let thirdTemp = resp[0].list[13].main.temp
let thirdHigh = resp[0].list[13].main.temp_max
let thirdLow = resp[0].list[13].main.temp_min
let thirdWind = resp[0].list[13].wind.speed
let thirdHumidity = resp[0].list[13].main.humidity
let fourthTemp = resp[0].list[21].main.temp
let fourthHigh = resp[0].list[21].main.temp_max
let fourthLow = resp[0].list[21].main.temp_min
let fourthWind = resp[0].list[21].wind.speed
let fourthHumidity = resp[0].list[21].main.humidity
let fifthTemp = resp[0].list[29].main.temp
let fifthHigh = resp[0].list[29].main.temp_max
let fifthLow = resp[0].list[29].main.temp_min
let fifthWind = resp[0].list[29].wind.speed
let fifthHumidity = resp[0].list[29].main.humidity

//var for the element IDs
const currentTemp = document.getElementById('current-temp');
const highLowTemp = document.getElementById('high-low-temp');
const windSpeed = document.getElementById('wind-speed');
const currentHumidity = document.getElementById('current-humidity');
const dayTwoTemp = document.getElementById('second-temp');
const dayTwoHigh = document.getElementById('second-high-low');
const dayTwoWind = document.getElementById('second-wind');
const dayTwoHumidity = document.getElementById('second-humidity');
const dayThreeTemp = document.getElementById('third-temp');
const dayThreeHigh = document.getElementById('third-high-low');
const dayThreeWind = document.getElementById('third-wind');
const dayThreeHumidity = document.getElementById('third-humidity');
const dayFourTemp = document.getElementById('fourth-temp');
const dayFourHigh = document.getElementById('fourth-high-low');
const dayFourWind = document.getElementById('fourth-wind');
const dayFourHumidity = document.getElementById('fourth-humidity');
const dayFiveTemp = document.getElementById('fifth-temp');
const dayFiveHigh = document.getElementById('fifth-high-low');
const dayFiveWind = document.getElementById('fifth-wind');
const dayFiveHumidity = document.getElementById('fifth-humidity');


//putting data on the page
currentTemp.innerHTML = "Current Temp: " + temp;
highLowTemp.innerHTML = "High Temp: " + highTemp + " Low Temp: " + lowTemp;
windSpeed.innerHTML = "Wind: " + wind + " MPH";
currentHumidity.innerHTML = "Humidity: " + humidity + "%";
dayTwoTemp.innerHTML = "Temp: " + secondTemp;
dayTwoHigh.innerHTML = "High Temp: " + secondHigh + " Low Temp: " + secondLow;
dayTwoWind.innerHTML = "Wind: " + secondWind + "MPH"
dayTwoHumidity.innerHTML = "Humidity: " + secondHumidity + "%" 
dayThreeTemp.innerHTML = "Temp: " + thirdTemp;
dayThreeHigh.innerHTML = "High Temp: " + thirdHigh + " Low Temp: " + thirdLow;
dayThreeWind.innerHTML = "Wind: " + thirdWind + "MPH"
dayThreeHumidity.innerHTML = "Humidity: " + thirdHumidity + "%" 
dayFourTemp.innerHTML = "Temp: " + fourthTemp;
dayFourHigh.innerHTML = "High Temp: " + fourthHigh + " Low Temp: " + fourthLow;
dayFourWind.innerHTML = "Wind: " + fourthWind + "MPH"
dayFourHumidity.innerHTML = "Humidity: " + fourthHumidity + "%"
dayFiveTemp.innerHTML = "Temp: " + fifthTemp;
dayFiveHigh.innerHTML = "High Temp: " + fifthHigh + " Low Temp: " + fourthLow;
dayFiveWind.innerHTML = "Wind: " + fifthWind + "MPH"
dayFiveHumidity.innerHTML = "Humidity: " + fifthHumidity + "%"

//learn how to push into arrays

      // row.innerHTML = 
  //     forecast.map((day, idx) => {
  //         if (idx <= 2) {
  //           let dt = new Date(day.dt * 1000);
  //           let sr = new Date(dat.sunrise * 1000).toTimeString();
  //           let ss = new Date(day.sunset * 1000).toTimeString();
  //           return `<div class="card">
  //           <h5 class="card-title p-2">${dt.toDateString()}</h5>
  //           <img
  //                 src="http://openweathermap.org/img/wn/${
  //                   day.weather[0].icon
  //                 }@4x.png"
  //                 class="card-img-top"
  //                 alt="${day.weather[0].description}"
  //               />
  //               <div class="card-body">
  //                 <h3 class="card-title">${day.weather[0].main}</h3>
  //                 <p class="card-text">Current Temp: ${current.temp}</p>
  //                 <p class="card-text">High Temp: ${day.temp.max}&deg;C Low Temp: ${
  //                   day.temp.min
  //                 }&deg;C</p>
  //                 <p class="card-text">Wind: ${current.wind_speed}m/s, ${
  //                   current.wind_deg
  //                 }&deg;</p>
  //                 <p class="card-text">Humidity: ${day.humidity}%</p>
  //                 <p class="card-text">Rain: ${day.pop * 100}%</p>
  //                 <p class="card-text">UV Index: ${day.uvi}</p>
  //                 </div>
  //             </div>
  //           </div>
  //         </div>`;
  //         }
  //       })
  //       .join(' ');
    },
   }
   app.init();