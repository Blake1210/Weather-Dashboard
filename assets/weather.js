var apiKey = "73dd143ec73b5b7ef062386098434881"

fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=73dd143ec73b5b7ef062386098434881')
  .then((response) => response.json())
  .then((data) => console.log(data));

  const app = {
    init: () => {
      document
        .getElementById('btnGet')
        .addEventListener('click', app.fetchWeather);
      document
        .getElementById('btnCurrent')
        .addEventListener('click', app.getLocation);
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
            return `<div class="card">`
          }
        })
    }

  }