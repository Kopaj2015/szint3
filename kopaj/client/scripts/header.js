Template.header.events({
        'submit form': function(event) {
            event.preventDefault();
            var emailVar = event.target.loginName.value;
        	var passwordVar = event.target.loginPass.value;
	        Meteor.loginWithPassword(emailVar, passwordVar);
        }
});