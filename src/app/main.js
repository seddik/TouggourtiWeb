$(document).ready(function () {


    getJSON("http://api.openweathermap.org/data/2.5/weather?q=Touggourt,dz&units=metric&APPID=df11073dc1abfbeb8d46132ea00ee41d",
             function (err, data) {
                 if (err != null) {
                     
                 } else {
                     //alert();
                     $("#tggt-weather-value").html(data["main"]["temp"] + "&#176;C");
                     document.getElementById("tggt-weather-img").src = "http://openweathermap.org/img/w/" + data["weather"][0]["icon"] + ".png";

                 }
             });
});