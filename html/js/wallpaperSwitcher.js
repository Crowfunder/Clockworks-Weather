// Change the background video
function changeVideoSource(url, id) {
    let video = document.getElementById(id);
    video.src = url;
    video.play();
}

// Function returning weather state
async function getWeather() {
    let weather = await fetch(`${urlOWM}?id=${cityIDOWM}&appid=${tokenOWM}`)
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
            let wallpaperPath = weathers[weatherState];
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
        }, changeFrequency);
    }


// Get the properties from Wallpaper Engine
window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {

        const changeFrequency = properties.changefrequency.value;
        const cityIDOWM = properties.cityidopenweathermap.value;
        const urlOWM = properties.urlopenweathermap.value;
        const tokenOWM = properties.tokenopenweathermap.value;
    }
};

wallpaperWrapper();
