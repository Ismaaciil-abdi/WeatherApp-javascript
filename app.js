function getWeather() {
  const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
  const cityInput = document.getElementById('cityInput').value;
  const weatherInfoDiv = document.getElementById('weatherInfo');

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`).then(response => response.json()).then(data => {
          const temperature = Math.round(data.main.temp - 273.15); 
          const description = data.weather[0].description;

          const weatherInfo = `<p>Temperature: ${temperature}°C</p> <p>Description: ${description}</p>`;

          weatherInfoDiv.innerHTML = weatherInfo;
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
          weatherInfoDiv.innerHTML = '<p>Please try again.</p>';
      });
}