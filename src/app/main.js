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

                 var result = [];

                 for (var i in data)
                     result.push({ value: data[i]["nom"], tel: data[i]["data"] });
                 // setup autocomplete function pulling from currencies[] array
                 $('#autocomplete').autocomplete({
                     lookup: result,
                     onSelect: function (suggestion) {
                      
                     }

                 });

                 
 

             }
         }
         );


  
});