// Selecting elements from the DOM
const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const currentWeatherDiv = document.querySelector(".current-weather");
const weatherCardsDiv = document.querySelector(".weather-cards");

// Defining the API key for OpenWeatherMap API
const API_KEY = "bb0d306ba265270b66be7c5f3b96c685";

// A function to create HTML for weather cards
const createWeatherCard = (cityName, weatherItem, index) => {
  if (index === 0) {
    // HTML for the main weather card (today's forecast)
    return `
      <div class="details">
        <h2>${cityName} (${weatherItem.dt_txt.split(" ")[0]})</h2>
        <h4>Temperature: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C </h4>
        <h4>Wind: ${weatherItem.wind.speed} M/S</h4>
        <h4>Humidity: ${weatherItem.main.humidity}%</h4>
      </div>
      <div class="icon">
        <img src="https://openweathermap.org/img/wn/${
          weatherItem.weather[0].icon
        }@4x.png"/>
        <h4>${weatherItem.weather[0].description}</h4>
      </div>`;
  } else {
    // HTML for the weather cards for upcoming days
    return `
      <li class="card">
        <h3>${weatherItem.dt_txt.split(" ")[0]}</h3>
        <img src="https://openweathermap.org/img/wn/${
          weatherItem.weather[0].icon
        }@2x.png" alt="weather-icon">
        <h4>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C </h4>
        <h4>Wind: ${weatherItem.wind.speed} M/S</h4>
        <h4>Humidity: ${weatherItem.main.humidity}%</h4>
      </li>`;
  }
};

// A function to fetch weather details from OpenWeatherMap API
const getWeatherDetails = (cityName, lat, lon) => {
  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  // Fetching weather data
  fetch(WEATHER_API_URL)
    .then((res) => res.json())
    .then((data) => {
      // Filtering the forecasts to get only one forecast per day
      const uniqueForecastDays = [];
      const fiveDaysForecast = data.list.filter((forecast) => {
        const forecastDate = new Date(forecast.dt_txt).getDate();
        if (!uniqueForecastDays.includes(forecastDate)) {
          return uniqueForecastDays.push(forecastDate);
        }
      });

      // Clearing previous weather data
      cityInput.value = "";
      currentWeatherDiv.innerHTML = "";
      weatherCardsDiv.innerHTML = "";

      // Creating weather cards and adding them to the DOM
      fiveDaysForecast.forEach((weatherItem, index) => {
        weatherCardsDiv.insertAdjacentHTML(
          "beforeend",
          createWeatherCard(cityName, weatherItem, index)
        );
      });
    })
    .catch(() => {
      alert("An error occurred while fetching the weather forecast");
    });
};

// Selecting the container for cities list
const citiesListDiv = document.querySelector(".cities-list");

// A function to add city names to the cities list
const addToCitiesList = (cityName) => {
  const cityContainer = document.createElement("div");
  cityContainer.classList.add("city-container");
  cityContainer.textContent = cityName;
  citiesListDiv.appendChild(cityContainer);
};

// A function to get city coordinates from OpenWeatherMap API
const getCityCoordinates = () => {
  const cityName = cityInput.value.trim();
  if (!cityName) return;

  const GEOCODING_API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;

  // Fetching city coordinates
  fetch(GEOCODING_API_URL)
    .then((res) => res.json())
    .then((data) => {
      if (!data.length) return alert(`No coordinates found for ${cityName}`);
      const { name, lat, lon } = data[0];
      getWeatherDetails(name, lat, lon); // Getting weather details after obtaining coordinates
    })
    .catch(() => {
      alert("An error occurred while fetching the coordinates");
    });
};

// Adding a click event listener to the search button
searchButton.addEventListener("click", getCityCoordinates);
