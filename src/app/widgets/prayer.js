(function (app) {
    app.PrayerComponent =
      ng.core.Component({
          selector: 'tggt-prayer',
          templateUrl: 'views/prayer.html'
      })
      .Class({
          constructor: function () {
              this.Sobh = "04:00";
              this.Dohr = "12:43";
              this.Asr = "16:01";
              this.Magrib = "18:52";
              this.Isha = "19:45";
          }
      });


})(window.app || (window.app = {}));

