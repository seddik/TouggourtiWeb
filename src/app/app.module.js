(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule ],
      declarations: [app.AppComponent, app.WeatherComponent, app.PrayerComponent, app.MapComponent],
      bootstrap: [ app.AppComponent ]
    })
    .Class({
        constructor: function () {
            
        }
    });
})(window.app || (window.app = {}));