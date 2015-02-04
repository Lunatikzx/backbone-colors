var app = app || {};
'use strict'

app.SquareView = Backbone.View.extend({
  tagName: 'div',
  template : _.template($('#square_template').html()),
  events:{
    'click .square':'clear'
  }, 
  initialize:function(){
   
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'visible', this.toggleVisible);
  
  },
  
  toggleVisible: function () {
    this.$el.toggleClass('hidden', this.isHidden());
  },  
  
  render:function(){
     this.$el.html(this.template(this.model.toJSON()));
     return this;
  },
  
  clear: function () {
    this.model.destroy();
  }
});
