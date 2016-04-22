Template.matches.helpers({
	// Returns information stored in soccerDB
	matches: function(){
		return soccerDB.find({});
	},
	// Returns if user has admin rights
	// adminUser: function(){
	// 	return this.userId === 'ndZw9CFpoXvBesH6C';
	// }
});

Template.matches.events({
	// Adds the form to the soccerDB
	"submit .add-match": function(event){
		var home_away = event.target.home_away.value;
		var opponent = event.target.opponent.value;
		var time = event.target.time.value;
		var date = event.target.date.value;

		// Calls the addMatch function in db.js file
		Meteor.call('addTask', home_away, opponent, time, date);

		event.target.home_away.value = '';
		event.target.opponent.value = '';
		event.target.time.value = '';
		event.target.date.value = '';

		return false;
	},
	// Delete matches
	"click .delete-match": function(event){
		if(confirm('Delete match?')){
			// Calls the deleteMatch function in db.js file
			Meteor.call('deleteMatch', this._id);
		}

		return false;
	}
});