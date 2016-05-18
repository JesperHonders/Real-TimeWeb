Meteor.publish('matches', function(){
	return soccerDB.find();
});

Meteor.publish('players', function(){
	return playerDB.find();
});