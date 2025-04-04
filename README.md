# 🌦️ Weather Forecast App

![Untitled design](https://github.com/user-attachments/assets/4b30fa39-8b67-46a6-b46f-59673f42a66c)


A beautiful, responsive weather application that provides real-time forecasts and weather data for locations worldwide. Built with modern web technologies for accurate, up-to-date weather information.

## ✨ Features

- **City Search**: Allows users to search for weather information in different cities.
- **Real-time Weather Data**: Get current temperature, wind speed, and weather conditions  
- **5-Day Forecast**: Shows an overview of the weather for the next five days.
- **Hourly Forecast**: Show the temperature of the upcoming 24 hours with 3-hour intervals. 
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop  
- **Unit Conversion**: Easily switch between Celsius and Fahrenheit  

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key (free tier available)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/SeanLYS99/WeatherForecast.git
```
2. Navigate to the Project Directory:
```bash
cd WeatherForecast
```
3. Install Dependencies
```bash
npm install
```
4. Start the Development Server
```bash
npm run dev
```

### API Integration
The application integrates with the **OpenWeatherMap API** to fetch weather data. Ensure you have a valid API key and configure it in the project.

1. Sign up at [`OpenWeatherMap`](https://openweathermap.org/api) to get your API key.
2. Create a `.env` file in the root folder.
3. Add your API key to the `.env` file:
```bash
VITE_API_KEY=your_api_key_here
```
Replace **your_api_key_here** with your actual API key.
