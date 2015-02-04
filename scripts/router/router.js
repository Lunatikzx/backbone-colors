var app = app  || {};

'use strict';

// Todo Router
// ----------
app.SquareRouter = Backbone.Router.extend({
    routes: {
        '*filter': 'setFilter'
    },

    setFilter: function (param) {
        // Détermine le filtre a utiliser
        app.squareFilter = param || '';
        // Active les événement de ma collections pour cacher ou montrer mes 
      // Items de todo. 
        app.squares.trigger('filter');
    }
});

app.squareRouter = new app.SquareRouter();
Backbone.history.start();