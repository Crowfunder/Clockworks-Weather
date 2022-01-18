// Basic Configs
var tokenOpenWeather = ""; 

// Wallpaper File Configs
var weatherNormal = "src/clockworks_nrm.mp4";
var weatherStorm = "src/clockworks_str.mp4";
var weatherSnow = "src/clockworks_snw.mp4";
var weatherWindy = "src/clockworks_wnd.mp4";


// Pulled from: https://stackoverflow.com/questions/5235145/changing-source-on-html5-video-tag
// If anything fucks up blame it on them.
function changeVideoSource(url, id) {
    "use strict";
    var video = document.getElementById(id);
    video.src = url;
    video.play();
}

function getWeather(token) {
    let weather;
    return weather;
}
