$(document).ready(function () {


    getJSON("http://api.openweathermap.org/data/2.5/weather?q=Touggourt,dz&units=metric&APPID=df11073dc1abfbeb8d46132ea00ee41d",
             function (err, data) {
                 if (err != null) {

                 } else {
                     
                     $("#tggt-weather-value").html(Math.round(data["main"]["temp"]) + "&#176;C");
                     $("#tggt-weather-img").attr('src', "http://openweathermap.org/img/w/" + data["weather"][0]["icon"] + ".png");

                 }
             });


    getJSON("http://touggourti.tk/api/activite/"
        ,
         function (err, data) {
             if (err != null) {

             } else {



                 

                 for (var key in data) {
                     if (data.hasOwnProperty(key)) {
                         var activ = data[key];
                         $("#list-activite").append('<li class="list-group-item">' + activ["nom"] + '</li>');
                     }
                 }

             }
         }
         );
});