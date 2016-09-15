$(document).ready(function () {



    jQuery(function ($) {
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Touggourt&units=metric&APPID=df11073dc1abfbeb8d46132ea00ee41d', function (data) {

            $("#tggt-weather-value").html(Math.round(data["main"]["temp"]) + "&#176;C");
            $("#tggt-weather-img").attr('src', "http://openweathermap.org/img/w/" + data["weather"][0]["icon"] + ".png");
        });
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


    jQuery(function ($) {
        $.getJSON('http://localhost:5213/api/activite/', function (data) {
            var result = [];

            for (var i in data) {
                result.push({ value: data[i].nom, tel: data[i].id });
                result.push({ value: data[i].nom_ar, tel: data[i].id });
            }

            $('#autocomplete').autocomplete({
                lookup: result,
                onSelect: function (suggestion) {

                }

            });
        });
    });





});