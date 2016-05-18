Template.match.helpers ({
  match: function() {
    return soccerDB.findOne({_id: this.id});
  }
})


Template.match.events ({
	'click #attendButton' : function(event){
		matchID = this.id;
		console.log(Meteor.user().username);
		Meteor.call('addPlayerToMatch', matchID, Meteor.user().username)
	}
})
