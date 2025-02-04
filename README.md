# 🌤 Real-time Weather App

A simple weather application that fetches real-time weather data using the **OpenWeatherMap API**.

## 🚀 Features
- Get real-time weather updates for any city.
- Displays temperature and weather conditions.
- Simple and responsive UI.

## 📌 Technologies Used
- **HTML** - Structure of the app.
- **CSS** - Styling the app.
- **JavaScript (Vanilla JS)** - Fetching data from OpenWeatherMap API.

## 🛠 How to Set Up

### 1️⃣ Get OpenWeatherMap API Key
1. Visit [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) and sign up.
2. Go to the **API Keys** section ([Click Here](https://home.openweathermap.org/api_keys)).
3. Copy your API Key.

### 2️⃣ Setup the Project
1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```
2. Open `script.js` and replace `YOUR_API_KEY` with your actual API Key:
   ```js
   let apiKey = "YOUR_ACTUAL_API_KEY"; 
   ```
3. Open `index.html` in a browser to run the app.

## 📜 Project Structure
```
/weather-app
│── index.html      # Main HTML file
│── styles.css      # Styles for UI
│── script.js       # JavaScript for fetching weather data
│── README.md       # Documentation
```

## 🎯 How to Use
1. Enter the city name in the input field.
2. Click the **"Get Weather"** button.
3. View real-time weather updates.

## 🔥 Example API Request
Replace `YOUR_API_KEY` with your real API Key and test this in your browser:
```
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
```

## 📝 License
This project is open-source and free to use.
