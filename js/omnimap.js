var Omnimap = function (){

	// Spam blog posts on the sidebar
	var googleLoginButton = "button[data-provider='google-oauth2']";

	return {
		logging: true,

		init: function(logging){
			this.login();
			console.log("Logged in to omnimap --- Panda")
		},

		login: function(){
			$.wait(4000).then($(googleLoginButton).click());
			console.log("pressing");
		}
	}

}();

Omnimap.init();