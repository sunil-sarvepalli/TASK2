document.addEventListener('DOMContentLoaded', () => {
    const weatherForm = document.getElementById('weather-form');
    const cityInput = document.getElementById('city-input');
    const weatherResult = document.getElementById('weather-result');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');

    weatherForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const city = cityInput.value.trim();
        if (city !== '') {
            getWeather(city);
        }
    });

    async function getWeather(city) {
        const apiKey = '0f38fa7511797ce5f7207f0316ea767b'; // Replace with your OpenWeatherMap API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('City not found');
            }
        } catch (error) {
            alert('Failed to fetch weather data');
        }
    }

    function displayWeather(data) {
        cityName.textContent = data.name;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Weather: ${data.weather[0].description}`;
        weatherResult.style.display = 'block';
    }
});
