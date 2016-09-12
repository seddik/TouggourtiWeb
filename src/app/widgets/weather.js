(function (app) {
    app.WeatherComponent =
      ng.core.Component({
          selector: 'tggt-weather',
          template: '<p><i class="fa fa-sun-o" style="color:orange"></i> it is {{temperature}}°C</p>'
      })
      .Class({
          constructor: function () {
              this.temperature = 20;
          }
      });


})(window.app || (window.app = {}));

