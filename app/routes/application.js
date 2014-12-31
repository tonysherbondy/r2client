import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authenticate: function(provider){
      console.log('authing');
      provider = provider || 'facebook-oauth2';
      var controller = this.controller;
      controller.set('error', null);
      controller.set('authData', null);
      this.get('torii').open(provider).then(function(authData){
        controller.set('authData', authData);
      }, function(error){
        controller.set('error', error);
      });
    }
  }
});
