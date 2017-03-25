var SparkNotesCleaner = function (){

	var blogFeatureClass = ".blog-feature",
		middleColumnClass = ".col-mid",
		leftMenuClass = ".left-menu",
		mainfooterClass = ".main-footer-container",
		moreHelpClass = ".more-help",
		readersNotesClass = ".containerUGC";

	return {
		logging: true,

		init: function(logging){
			console.clear()

			this.clearDistractions();
			console.log("Cleared spam! --- Panda")

			this.fitSummary();
			console.log("Fitted summary in screen --- Panda")
		},

		clearDistractions: function(){
			$(blogFeatureClass).empty();
			$(mainfooterClass).empty();
			$(moreHelpClass).empty();
			$(readersNotesClass).empty();
		},

		fitSummary: function(){
			$(middleColumnClass).css("width", "800px");
			$(leftMenuClass).css("width", "250px");
		}
	}

}();

SparkNotesCleaner.init();