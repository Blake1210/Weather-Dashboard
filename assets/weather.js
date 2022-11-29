var apiKey = "73dd143ec73b5b7ef062386098434881"

fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=73dd143ec73b5b7ef062386098434881')
  .then((response) => response.json())
  .then((data) => console.log(data));

  const app = {
    init: () => {
      document
        .getElementById('btnGet')
        .addEventListener('click', app.fetchWeather);
    },
    fetchWeather: (ev) => {
      let city = document.getElementById('city').ariaValueMax;
      let lang = 'en';
      let units = 'imperial';
      let url = `http://api.openweathermap.org/data/2.5/onecall?name=${city}&appid=${apiKey}`;
      fetch(url)
        .then((resp) => {
          if (!resp.ok) throw new Error(reso.statusText);
          return resp.json();
        })
        .then((data) => {
          app.showWeather(data);
        })
        .catch(console.err);
    },

    showWeather: (resp) => {
      console.log(resp);
      let row = document.querySelector('.weather.row');

      row.innerHTML = resp.daily
        .map((day, idx) => {
          if (idx <= 2) {
            let dt = new Date(day.dt * 1000);
            let sr = new Date(dat.sunrise * 1000).toTimeString();
            let ss = new Date(day.sunset * 1000).toTimeString();
            return `<div class="card">
            <h5 class="card-title p-2">${dt.toDateString()}</h5>
            <img
                  src="http://openweathermap.org/img/wn/${
                    day.weather[0].icon
                  }@4x.png"
                  class="card-img-top"
                  alt="${day.weather[0].description}"
                />
                <div class="card-body">
                  <h3 class="card-title">${day.weather[0].main}</h3>
                  <p class="card-text">Current Temp: ${current.temp}</p>
                  <p class="card-text">High Temp: ${day.temp.max}&deg;C Low Temp: ${
                    day.temp.min
                  }&deg;C</p>
                  <p class="card-text">Wind: ${current.wind_speed}m/s, ${
                    current.wind_deg
                  }&deg;</p>
                  <p class="card-text">Humidity: ${day.humidity}%</p>
                  <p class="card-text">Rain: ${day.pop * 100}%</p>
                  <p class="card-text">UV Index: ${day.uvi}</p>
                  </div>
              </div>
            </div>
          </div>`;
          }
        })
        .join(' ');
    },
  };
  app.init();