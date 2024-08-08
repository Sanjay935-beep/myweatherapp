document.getElementById('fetchWeather').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert('sala sahar ko nam hal');
    }
});

async function fetchWeather(city) {
    const apiKey = '1fcead705d75b04b54f06e66803efce2'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('cityName').innerText = `City: ${data.name}`;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
            document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
        } else {
            alert('City not found');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('An error occurred while fetching weather data');
    }
}

