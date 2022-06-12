/*
----------- Clockworks Wallpaper Configuration File -----------

---------------------------------------------------------------
Open OpenWeatherMap API Settings
Get any necessary settings from openweathermap.org
---------------------------------------------------------------
"tokenOpenWeatherMap"  -  Valid OpenWeatherMap API token.  
                          Requires an account.
"cityOpenWeatherMap"   -  City ID to get weather from. 
                          Refer to openweathermap.org/current
                          "By city ID" section to get your ID.
"urlOpenWeatherMap"    -  API query URL. Do not change unless
                          absolutely necessary.
"paramsOpenWeatherMap" -  Additional API parameters, optional.
                          Refer to openweathermap.org/current
                          Use syntax: "&param1=foo&param2=bar"

---------------------------------------------------------------
General Settings
---------------------------------------------------------------
"changeFrequency"      -  How often should the weather be checked.
                          (In miliseconds (default=5000))
"weather"              -  Defines which wallpaper file to use in 
                          specified weather conditions.
                          Refer to openweathermap.org/current

---------------------------------------------------------------
*/ 

const settings = {
    "tokenOpenWeatherMap"  : "",
    "cityIDOpenWeatherMap" : "",
    "urlOpenWeatherMap"    : "http://api.openweathermap.org/data/2.5/weather",
    "paramsOpenWeatherMap" : "",
    "changeFrequency"      : "5000",
    "weather" : {
        "Clear"        : "src/clockworks_clr.webm",
        "Clouds"       : "src/clockworks_cld.webm",
        "Thunderstorm" : "src/clockworks_str.webm",
        "Snow"         : "src/clockworks_snw.webm",
        "Drizzle"      : "src/clockworks_rain.webm",
        "Rain"         : "src/clockworks_rain.webm",
        "Fog"          : "src/clockworks_fog.webm",
        "Mist"         : "src/clockworks_fog.webm",
        "Smoke"        : "src/clockworks_fog.webm",
        "Haze"         : "src/clockworks_fog.webm",
        "Dust"         : "src/clockworks_wnd.webm",
        "Sand"         : "src/clockworks_wnd.webm",
        "Squall"       : "src/clockworks_wnd.webm",
        "Ash"          : "src/clockworks_fir.webm",
        "Tornado"      : "src/clockworks_wnd.webm"
    }
}