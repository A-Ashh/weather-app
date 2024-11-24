const apiKey = "662dc4fd4a746e63837590d7167d7fc5"; 

function getWeather() {
    const city = document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found, please try again.");
                return;
            }
            const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            document.getElementById("city-name").textContent = data.name;
            document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById("description").textContent = `Description: ${data.weather[0].description}`;
            document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById("windspeed").textContent = `Wind Speed: ${data.wind.speed} m/s`;

            document.getElementById("weather-icon").src = weatherIcon;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}
