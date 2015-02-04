var app = app || {};


app.AppView = Backbone.View.extend({
    el : "#squares",

    events : { 
      'click button' : 'createSquare'
    }, 

    initialize : function(){
        
        this.$slist = this.$('#squareList');
        this.$button = this.$('button');
        this.listenTo(app.squares,'add', this.addOne);
        this.listenTo(app.squares,'reset', this.addAll);
        this.listenTo(app.squares,'all', this.render);
        
        app.squares.fetch({reset: true});
    },

    addOne : function(model){
        var view = new app.SquareView({ model: model });
        this.$slist.append(view.render().el);
    },

    addAll : function(){
        this.$slist.html('');
        app.squares.each(this.addOne, this);
    },

    newAttributes : function(event){
        var colour = event.currentTarget.dataset.color;
        return {
            color: colour
        };
    },

    createSquare : function(event){
        app.squares.create(this.newAttributes(event));
    }
});