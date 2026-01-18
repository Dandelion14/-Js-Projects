🌦️ Weather App (Weather API)

A simple weather application built using HTML, CSS, and Vanilla JavaScript that fetches real-time weather data from a public Weather API and displays current conditions for any city.

🚀 Features

Search weather by city name

Displays:

Temperature

Weather condition (cloudy, clear, rain, etc.)

Humidity

Wind speed

Real-time data using API

Responsive and lightweight

Built with pure JavaScript (no frameworks)

🛠️ Technologies Used

HTML

CSS

JavaScript (Vanilla JS)

Weather API (e.g., OpenWeatherMap)

📂 Project Structure
weather-app/
│
├── index.html
├── style.css
├── script.js
└── README.md

🔑 API Setup

Go to a weather API provider (e.g., OpenWeatherMap)

Create a free account

Generate your API key

Replace the API key in your JavaScript file:

const API_KEY = "YOUR_API_KEY_HERE";

⚙️ How It Works

User enters a city name

JavaScript sends a fetch() request to the Weather API

API returns weather data in JSON format

The app extracts required values and updates the UI