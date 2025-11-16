// Static values for demo
const temperature = 28; // in Celsius
const windSpeed = 10;   // in km/h

function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

function updateWeather() {
  const windChillElement = document.getElementById("windchill");
  if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = calculateWindChill(temperature, windSpeed) + " °C";
  } else {
    windChillElement.textContent = "N/A";
  }
}

function updateFooter() {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("modified").textContent = document.lastModified;
}

document.addEventListener("DOMContentLoaded", () => {
  updateWeather();
  updateFooter();
});