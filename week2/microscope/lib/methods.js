Meteor.methods({
	addTask: function(home_away, opponent, time, date){
		if(!Meteor.userId()){
			throw new Meteor.Error('No Access!');
		}

		soccerDB.insert({
			home_away: home_away,
			opponent: opponent,
			time: time,
			date: date,
			userId: Meteor.userId(),
		});
	},
	deleteMatch: function(matchId){
		soccerDB.remove(matchId);
	}
});