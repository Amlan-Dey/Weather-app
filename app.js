const dummyData = {
    "New York": { temp: 22, desc: "Sunny", humidity: 45 },
    London: { temp: 15, desc: "Cloudy", humidity: 72 },
    Mumbai: { temp: 20, desc: "Rainy", humidity: 83 },
    Paris: { temp: 19, desc: "Breezy", humidity: 60 },
    Assam: { temp: 28, desc: "Partly Cloudy", humidity: 40 },
    Delhi: { temp: 30, desc: "Sunny", humidity: 55 }
  };
  
  function getWeather() {
    const input = document.getElementById("cityInput").value.trim();
    const weatherInfo = document.getElementById("weatherInfo");
  
    if (input === "") {
      weatherInfo.innerHTML = "<p>Please enter a city name ⛅</p>";
      console.log("No city entered");
      return;
    }
  
    const city = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  
    console.log("City entered:", city);
  
    if (dummyData[city]) {
      const data = dummyData[city];
  
      console.log("Weather Data:", data);
  
      weatherInfo.innerHTML = `
        <div class="temp">${data.temp}°C</div>
        <div class="city">${city}</div>
        <div class="desc">${data.desc}</div>
        <div class="humidity">💧 Humidity: ${data.humidity}%</div>
      `;
    } else {
      console.log(`No weather data found for: ${city}`);
      weatherInfo.innerHTML = `<p>⚠️ No weather data found for "${city}".</p>`;
    }
  }
  