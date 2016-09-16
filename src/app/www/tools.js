
var convert_to_24h = function (str) {
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
var convert_sql_date = function (str) {
    var year = parseInt(str.substring(0, 4));
    var month = parseInt(str.substring(5, 7)) - 1;
    var day = parseInt(str.substring(8, 10));

    return new Date(year, month, day);
};
 
 

var getMonth = function (str) {

    switch (str) {
        case 0:
            return "جانفي";
        case 1:
            return "فيفري";
        case 2:
            return "مارس";
        case 3:
            return "أفريل";
        case 4:
            return "ماي";
        case 5:
            return "جوان";
        case 6:
            return "جويلية";
        case 7:
            return "أوت";
        case 8:
            return "سبتمبر";
        case 9:
            return "أكتوبر";
        case 10:
            return "نوفمبر";
        case 11:
            return "ديسمبر";
    }

};


var getDay = function (str) {

    switch (str) {
        case 6:
            return "السبت";
        case 0:
            return "الأحد";
        case 1:
            return "الإثنين";
        case 2:
            return "الثلاثاء";
        case 3:
            return "الإربعاء";
        case 4:
            return "الخميس";
        case 5:
            return "الجمعة";

    }

};

function convert_weather_to_icon(str) {

    switch (str.toLowerCase()) {
        case "thunderstorm":
            return 'icon-thunder';

        case "drizzle":
            return 'icon-drizzle';

        case "rain":
            return 'icon-rainy';

        case "snow":
            return 'icon-snowy';

        case "atmosphere":
        case "extreme":
            return 'icon-mist';

        case "clear":
            return 'icon-sun';

        case "clouds":
            return 'icon-cloud';

        case "additional":
            return 'icon-thunder';
        default:
            return 'icon-mist';
    }

};