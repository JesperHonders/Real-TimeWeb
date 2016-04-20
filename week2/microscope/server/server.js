Meteor.publish('matches', function(){
	return soccerDB.find();
});