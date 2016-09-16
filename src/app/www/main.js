Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

$(document).ready(function () {



    jQuery(function ($) {
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Touggourt&units=metric&APPID=df11073dc1abfbeb8d46132ea00ee41d', function (data) {

            var today = getDay(new Date().getDay());
            $("#tggt-weather-value").html(today + ' : ' + Math.round(data["main"]["temp"]) + "&#176;");

            $("#tggt-weather-icon").addClass(convert_weather_to_icon(data["weather"][0]["main"]));
        });
    });
    jQuery(function ($) {
        $.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily?q=Touggourt&cnt=5&units=metric&APPID=df11073dc1abfbeb8d46132ea00ee41d', function (data) {

            var today  = new Date();
            
            $('#tggt-forecast-days').html("");
            $('#tggt-forecast').html("");

            for (var i = 0; i < data.list.length; i++) {

                
                var curr_date = new Date(data.list[i].dt*1000);
                $("#tggt-forecast-days").append('<td>' + getDay(curr_date.getDay()) + '</td>')
                $("#tggt-forecast").append('<td><i class="' + convert_weather_to_icon(data.list[i].weather[0].main) + '"></i> ' + Math.ceil(data.list[i].temp.day) + '</td>')

            }



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