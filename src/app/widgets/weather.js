(function (app) {
    app.WeatherComponent =
      ng.core.Component({
          selector: 'tggt-weather',
          template: '<p ><img id="tggt-weather-img"/><span id="tggt-weather-value">Chargement ...</span></p>'//
      })
      .Class({
          constructor: function () {
              var getJSON = function (url, callback) {
                  var xhr = new XMLHttpRequest();
                  xhr.open("get", url, true);
                  xhr.responseType = "json";
                  xhr.onload = function () {
                      var status = xhr.status;
                      if (status == 200) {
                          callback(null, xhr.response);
                      } else {
                          callback(status);
                      }
                  };
                  xhr.send();
              };

              getJSON("http://api.openweathermap.org/data/2.5/weather?q=Touggourt,dz&units=metric&APPID=df11073dc1abfbeb8d46132ea00ee41d",
                  function (err, data) {
                      if (err != null) {
                          this.temperature = "-1";
                      } else {
                          //alert();
                          document.getElementById("tggt-weather-value").innerText = data["main"]["temp"] + "°C";
                          document.getElementById("tggt-weather-img").src = "http://openweathermap.org/img/w/" + data["weather"][0]["icon"] + ".png";

                      }
                  });


          }
      });


})(window.app || (window.app = {}));

