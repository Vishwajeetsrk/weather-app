/* script.js */
async function getWeather() {
    let city = document.getElementById("cityInput").value;
    if (city === "India") return;
    let apiKey = "5532c8cd9610b55224cf9da096f3e65a";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        let response = await fetch(url);
        let data = await response.json();
        document.getElementById("weatherResult").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        document.getElementById("weatherResult").innerText = "City not found!";
    }
}
