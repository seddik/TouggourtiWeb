(function (app) {
    app.AppComponent =
      ng.core.Component({
          selector: 'tggt-app',
          templateUrl: 'app.html'
      })
      .Class({
          constructor: function () {
              this.year = new Date().getFullYear();
          }
      });

 
})(window.app || (window.app = {}));

 