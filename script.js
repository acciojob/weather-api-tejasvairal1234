//your JS code here. If required.
const btn = document.getElementById("btn");
const txt = document.getElementById("weatherData");

async function weatherData() {
  try
  {
    let response = await fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ce7bedd96d9a4c5a083de8283c5a7b60"
);
    let data = await response.json();
    return data;
  }
  catch(err)
  {
    return err;
  }
  
}

btn.addEventListener("click", async () => 
	{
		let Data = await weatherData();
		txt.textContent = `Current weather in London: ${Data.weather[0].main}`;
	})