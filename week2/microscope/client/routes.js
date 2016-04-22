Router.route('/', function() {
  this.render('matches');
});

Router.route('match', {
  path: '/match/:_id',
  template: 'match',
  data: function() {
    return {
    	id: this.params._id, 
    	match: soccerDB.findOne(this.params._id), 
    	// attendant: Attendants.findOne({eventId: this.params._id})
    }
  }
});