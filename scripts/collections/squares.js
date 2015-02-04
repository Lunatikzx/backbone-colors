var app = app || {};

app.Squares = Backbone.Collection.extend({
    model : app.Square,
    localStorage : new Backbone.LocalStorage('colors-backbone')

});

app.squares = new app.Squares();