var apiKey = "b711981b9768551b14c4803eeb3cca40"

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&appid=${apiKey}`)
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
let rain = resp[1].rain
console.log(rain)

//var for the element IDs
const currentTemp = document.getElementById('current-temp');
const highLowTemp = document.getElementById('high-low-temp');
const windSpeed = document.getElementById('wind-speed');
const currentHumidity = document.getElementById('current-humidity');

currentTemp.innerHTML = "Current Temp: " + temp;
highLowTemp.innerHTML = "High Temp: " + highTemp + " Low Temp: " + lowTemp
windSpeed.innerHTML = "Wind: " + wind + " MPH"
currentHumidity.innerHTML = "Humidity: " + humidity + "%"
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