// Subscribe
Meteor.subscribe('matches');

// Signup config
Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});