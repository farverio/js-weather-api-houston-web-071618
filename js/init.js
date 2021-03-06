  document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById("NYCWeatherChart").getContext("2d")
  const API_KEY = '44a178458fc7cd4b33d2534ca073225d';
  const CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  const URL = CORS_WRAPPER + "https://api.darksky.net/forecast/" + API_KEY + "/29.7604,-95.3698?exclude=currently,minutely,daily";

  // make your fetch in the makeRequest function in weatherChart.js
  makeRequest(URL, ctx)
});
