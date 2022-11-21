var apiKey = "73dd143ec73b5b7ef062386098434881"

fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=73dd143ec73b5b7ef062386098434881')
  .then((response) => response.json())
  .then((data) => console.log(data));
