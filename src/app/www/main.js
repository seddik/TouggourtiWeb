$(document).ready(function () {



    jQuery(function ($) {
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Touggourt&units=metric&APPID=df11073dc1abfbeb8d46132ea00ee41d', function (data) {

            var today = getDay(new Date().getDay());
            $("#tggt-weather-value").html(today + ' : ' + Math.round(data["main"]["temp"]) + "&#176;");

            $("#tggt-weather-icon").addClass(convert_weather_to_icon(data["weather"][0]["main"]));
        });
    });
    jQuery(function ($) {
        $.getJSON('http://api.openweathermap.org/data/2.5/forecast?q=Touggourt&units=metric&APPID=df11073dc1abfbeb8d46132ea00ee41d', function (data) {

            var today = getDay(new Date().getDay());


            var days = [];
            $('#tggt-forecast-days').html("");
            for (var i in data.list) {
                var curr_date = getDay(convert_sql_date(data.list[i].dt_txt.substring(0, 10)).getDay());


                if (curr_date != today && days.indexOf(curr_date) == -1) {
                    days.push(curr_date);

                    $("#tggt-forecast-days").append('<td>' + curr_date + '</td>')
                }
            }


            //$("#tggt-forecast-days").html(Math.round(data["main"]["temp"]) + "&#176;C");
            //$("#tggt-weather-icon").addClass(convert_weather_to_icon(data["weather"][0]["main"]));

            $(".tggt-forecast-loading").hide();
        });
    });

    jQuery(function ($) {
        $.getJSON('http://muslimsalat.com/touggourt/daily/5.json?key=45174d57907aa372b3a0c9d64221baec&jsoncallback=?', function (times) {

            var sobh = convert_to_24h(times.items[0].fajr);
            var dohr = convert_to_24h(times.items[0].dhuhr);
            var asr = convert_to_24h(times.items[0].asr);
            var maghrib = convert_to_24h(times.items[0].maghrib);
            var isha = convert_to_24h(times.items[0].isha);
            $('#prayer-times').html("");
            $('#prayer-times')
            .append('<td>' + sobh)
            .append('</td><td>' + dohr)
            .append('</td><td>' + asr)
            .append('</td><td>' + maghrib)
            .append('</td><td>' + isha + '</td>')
        });
    });








});