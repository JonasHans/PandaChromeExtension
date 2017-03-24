var SparkNotesCleaner = function (){

	// Spam blog posts on the sidebar
	var blogFeatureClass = ".blog-feature",
		middleColumnClass = ".col-mid",
		leftMenuClass = ".left-menu";

	return {
		logging: true,

		init: function(logging){
			console.clear()

			this.clearRightSidebar();
			console.log("Cleared spam! --- Panda")

			this.fitSummary();
			console.log("Fitted summary in screen --- Panda")
		},

		clearRightSidebar: function(){
			$(blogFeatureClass).empty();
		},

		fitSummary: function(){
			$(middleColumnClass).css("width", "800px");
			$(leftMenuClass).css("width", "250px");
		}
	}

}();

SparkNotesCleaner.init();