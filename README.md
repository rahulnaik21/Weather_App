# Weather_App

# 🌤️ Weather Dashboard

A simple and interactive weather dashboard web app that allows users to search for real-time weather details of any city using the **OpenWeatherMap API**.  
It displays key weather information such as temperature, humidity, weather conditions, and icons — all presented in a modern, responsive glass-effect UI.

---

## 🚀 Features

- Real-time weather data using **OpenWeatherMap API**  
- Smooth gradient background with animation  
- Loading indicator with minimum display time  
- Responsive design (works on both desktop & mobile)  
- Clean and modern glassmorphism interface  

---

## 🧩 Tech Stack

- **HTML5** – Structure  
- **CSS3** – Styling and animations  
- **JavaScript (ES6)** – API handling and interactivity  
- **OpenWeatherMap API** – Real-time weather data  

---

## 🛠️ Setup Instructions
 1. Clone the repository
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard


2. Open the project

Simply open the index.html file in any web browser.
💡 You can also serve it locally using VS Code’s Live Server extension or any simple HTTP server.


3. Add your API Key

const apiKey = "5fa4efd574c1a9eaf4de5ad56ba915c7";


🧪 Running Test Cases

However, you can manually test the app by checking the following:
Enter a valid city name (e.g., Mumbai) — weather data should display correctly.
Enter an invalid city name — an appropriate error message should appear.
Try without entering any input — prompt should ask for a city name.
Check responsiveness on mobile and desktop screens.
Observe that a loading message stays visible for at least 1 second before displaying results.


💡 Assumptions & Design Choices

The app uses a 1-second minimum loading time to create a smooth UI experience.
Weather data is fetched in metric units (°C).
Only current weather data (not forecast) is displayed for simplicity.
The background uses a gradient animation to enhance aesthetics.
A glassmorphism container is used for better contrast and readability.
