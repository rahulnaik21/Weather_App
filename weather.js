document.getElementById("search").addEventListener("click", async () => {
    const city = document.getElementById("city").value.trim();
    const resultDiv = document.getElementById("result");

    if (!city) {
        resultDiv.innerHTML = "Please enter a city name!";
        return;
    }

    resultDiv.innerHTML = "⏳ Loading...";
    const minLoadingTime = 500; // 1 minute = 60000 ms
    const startTime = Date.now();

    try {
        const apiKey = "5fa4efd574c1a9eaf4de5ad56ba915c7";
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await res.json();

        // Calculate remaining wait time
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, minLoadingTime - elapsed);

        setTimeout(() => {
            if (data.cod !== 200) {
                resultDiv.innerHTML = `Error: ${data.message}`;
                return;
            }

            resultDiv.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>🌡️ Temperature: ${data.main.temp} °C</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>☁️ Weather: ${data.weather[0].main} - ${data.weather[0].description}</p>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon">
            `;
        }, remaining);
        
    } catch (err) {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, minLoadingTime - elapsed);
        setTimeout(() => {
            resultDiv.innerHTML = "⚠️ Failed to fetch weather data.";
        }, remaining);
        console.error(err);
    }
});

