(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Hello, and welcome to Touggourti</h1><h4>Premier site de référencement de la ville</h4>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));