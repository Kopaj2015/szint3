Template.register.events({
        'submit form': function(event) {
            event.preventDefault();
            var emailVar = event.target.loginName.value;
        	var passwordVar = event.target.loginPass.value;
	        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        	});
        }

        
});