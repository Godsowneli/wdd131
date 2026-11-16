
// Static weather values for Nigeria
const temperature = 30;
const windSpeed = 12;

// Function to calculate wind chill in Celsius
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) -
        (11.37 * Math.pow(speed, 0.16)) +
        (0.3965 * temp * Math.pow(speed, 0.16));
}

// Check if wind chill conditions are met
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}

// Display wind chill on the page
document.querySelector("#windchill").textContent = windChill;

// Display current year
const today = new Date();

document.querySelector("#currentyear").textContent =
    today.getFullYear();

// Display last modified date
document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;
