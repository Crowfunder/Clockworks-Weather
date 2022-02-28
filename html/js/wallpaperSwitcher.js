// Change the background video
function changeVideoSource(url, id) {
    let video = document.getElementById(id);
    video.src = url;
    video.play();
}

// Function returning weather state
async function getWeather() {
    let weather = await fetch(`${urlOWM}?id=${cityIDOWM}&appid=${tokenOWM}${paramsOWM}`)
    .then( (response) => response.json() )
    .then( (responseJSON) => { 
        return responseJSON.weather[0].main ;
    });
    return weather;
}

async function weatherSwitcher(weatherState) {

    // Check for offline mode
    if (navigator.onLine) {

        // Check if weather state changed
        let weatherState_new = await getWeather();
        if (weatherState_new != weatherState) {
            weatherState = weatherState_new;

            // Change the wallpaper
            let wallpaperPath = settings.weather[weatherState];
            changeVideoSource(wallpaperPath, "WallpaperVideo");
        }
    }
    return weatherState;
}

function wallpaperWrapper() {
    "use strict";

    // Set default weather state
    var weatherState = "Clear";

    // Permaloop the weather detection
    setInterval(
        async function() { 
            weatherState = await weatherSwitcher(weatherState);
        }, settings.changeFrequency);
    }

// Simplify the variable names
const urlOWM = settings.urlOpenWeatherMap;
const cityIDOWM = settings.cityIDOpenWeatherMap;
const tokenOWM = settings.tokenOpenWeatherMap;
const paramsOWM = settings.paramsOpenWeatherMap;

wallpaperWrapper();
