# Weather-App
A simple web api using openweather

Node API Proxy Server
Server used for hiding API keys, rate limiting and caching. This uses the OpenWeather API but you can easily change it to whatever public API you are using

Usage
Install dependencies
npm install
Run on http://localhost:5000
npm run dev
Add public API info


If the public API URL is https://api.openweathermap.org/data/2.5/weather?q={city}&appid={APIkey}

API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
API_KEY_NAME = "appid"
API_KEY_VALUE = "YOUR API KEY"
You can add on any other query params as needed when hitting the /api endpoint such as https://yourdomain/api?q=detroit without having to add your key in the client

Add new routes as you see fit
Change rate limiting and caching to desired values
