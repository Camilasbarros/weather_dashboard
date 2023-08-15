# Weather Dashboard

## Description

This project involves building a weather dashboard that retrieves and displays weather data for cities using Server-Side APIs. The dashboard will run in the browser and feature dynamically updated HTML and CSS. Users will be able to see the current weather conditions and a 5-day forecast for multiple cities. The project will use the 5 Day Weather Forecast API from OpenWeatherMap, which requires an API key for access.

## Getting Started

### Prerequisites

Before you begin, you need to have the following:

- An API key from OpenWeatherMap. You can register for an API key on their website.
- A modern web browser.

### Installing

1. Clone or download the repository to your local machine.
2. Open the project folder in your preferred code editor.

## Usage

### Searching for a City

1. Open the `index.html` file in your web browser.
2. You'll see a search form where you can enter the name of a city.
3. After entering the city name, click the "Search" button.

### Viewing Current Weather

1. Once you've searched for a city, the current weather conditions for that city will be displayed.
2. The information displayed includes the city name, date, weather condition icon, temperature, humidity, and wind speed.

### Viewing 5-Day Forecast

1. After viewing the current weather, you can also see a 5-day forecast for the city.
2. The forecast will include the date, weather condition icon, temperature, and humidity for each day.

### Search History

1. The searched cities will be added to the search history section.
2. Clicking on a city in the search history will display both the current weather and the 5-day forecast for that city again.

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## API Reference

To access weather data, the application uses the OpenWeatherMap API. The base URL for API calls looks like the following:

```
https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
```

## Screenshots of the weatheR dashboard

[screenshots](./Images/screenshots_1.png).
[screenshots](./Images/screenshots_2.png).

## License

This project is licensed under the [MIT License](LICENSE).

## Links to GitHub

Author GitHub: https://github.com/Camilasbarros

Repository GitHub: https://github.com/Camilasbarros/weather_dashboard
