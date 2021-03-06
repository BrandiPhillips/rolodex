import Backbone from 'backbone';
import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options){
    // this.name = options.name,
    // this.email = options.email,
    // this.phone = options.phone,
    this.model = options.model;
    this.template = options.template;

    this.listenTo(this.model, 'update', this.render);
  },
  // have the contact vew listen for a click event:
  events: {
    'click .contact-card': 'showHandler'
  },
  showHandler: function(event){
    this.trigger('showCardDetails', this.model);
  },
  render: function(){
    var html = this.template({contact: this.model.attributes});
    this.$el.html(html);
    return this;
  }
});

export default ContactView;
