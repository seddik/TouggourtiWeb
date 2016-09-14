$(document).ready(function () {


    getJSON("http://api.openweathermap.org/data/2.5/weather?q=Touggourt&units=metric&APPID=df11073dc1abfbeb8d46132ea00ee41d",
             function (err, data) {
                 if (err != null) {

                 } else {

                     $("#tggt-weather-value").html(Math.round(data["main"]["temp"]) + "&#176;C");
                     $("#tggt-weather-img").attr('src', "http://openweathermap.org/img/w/" + data["weather"][0]["icon"] + ".png");

                 }
             });


    jQuery(function ($) {
        $.getJSON('http://muslimsalat.com/touggourt/daily/5.json?key=45174d57907aa372b3a0c9d64221baec&jsoncallback=?', function (times) {

            var sobh = convert_to_24h(times.items[0].fajr);
            var dohr = convert_to_24h(times.items[0].dhuhr);
            var asr = convert_to_24h(times.items[0].asr);
            var maghrib = convert_to_24h(times.items[0].maghrib);
            var isha = convert_to_24h(times.items[0].isha);

            $('#prayer-times')
            .append('<td>' + sobh)
            .append('</td><td>' + dohr)
            .append('</td><td>' + asr)
            .append('</td><td>' + maghrib)
            .append('</td><td>' + isha + '</td>')
        });
    });

    function convert_to_24h(str) {
        var hours = Number(str.match(/^(\d+)/)[1]);
        var minutes = Number(str.match(/:(\d+)/)[1]);
        var AMPM = str.match(/\s?([AaPp][Mm]?)$/)[1];
        var pm = ['P', 'p', 'PM', 'pM', 'pm', 'Pm'];
        var am = ['A', 'a', 'AM', 'aM', 'am', 'Am'];
        if (pm.indexOf(AMPM) >= 0 && hours < 12) hours = hours + 12;
        if (am.indexOf(AMPM) >= 0 && hours == 12) hours = hours - 12;
        var sHours = hours.toString();
        var sMinutes = minutes.toString();
        if (hours < 10) sHours = "0" + sHours;
        if (minutes < 10) sMinutes = "0" + sMinutes;

        return (sHours + ":" + sMinutes);

    };

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