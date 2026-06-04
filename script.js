const btn = document.getElementById("btn");
const txt = document.getElementById("weatherData");

async function weatherData() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e467712b257e418838be97cc881a71de"
  );

  return await response.json();
}

btn.addEventListener("click", async () => {
  const data = await weatherData();

  txt.textContent = `Current weather in London: ${data.weather[0].main}`;
});