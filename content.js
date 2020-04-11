function iamContentJS(){
	console.log("iamContentJS called in content.js script");
}

//$(document).ready(function(){
	function printUtility(choice_button_yes_no, choice_timestamp_yes_no, choice_pagetitle_yes_no, choice_header_text){
		let custom_header = "";
		console.log("content.js===>" + choice_button_yes_no, choice_timestamp_yes_no, choice_pagetitle_yes_no, choice_header_text);

		if(choice_timestamp_yes_no == true)
			custom_header = custom_header + new Date().toLocaleString() +  " </br>";
		else
			custom_header = custom_header + "";
		
		if(choice_pagetitle_yes_no == true)
			custom_header = custom_header + document.title;
		else
			custom_header = custom_header ;
		
		custom_header = "<h2>" + custom_header + "</br>" + choice_header_text +  " </h2>";
		
		console.log("content.js(custom_header)==>" + custom_header);
		
			$(".popOutBar").parent().next().find("visual-modern").printThis({
			debug: true,               // show the iframe for debugging
			importCSS: true,            // import parent page css
			importStyle: false,         // import style tags
			//loadCSS: "outsidecss.css",                // path to additional css file - use an array [] for multiple
			pageTitle: "Test Title Page",              // add title to print page	
			header: custom_header, //"<h1>" + document.title +" </br>User Given Header<h1>",               // prefix to html
			//footer: "<h1>Test Footer<h1>",               // postfix to html
			copyTagClasses: true,      // copy classes from the html & body tag
			beforePrint: function(){console.log("Before PrintThis function");},          // function called before iframe is filled
			afterPrint: function(){console.log("After PrintThis function");}            // function called before iframe is removed
		  });
	}

//});

/*var checkExist = setInterval(function() {
   if ($('#clickToPrintButton').length) {
      console.log("Exists. Checked from the loop!");
	  //$('visual-modern').printThis();
	  //$(".popOutBar").parent().next().find("visual-modern").printThis();
	  $(".popOutBar").parent().next().find("visual-modern").printThis({
		importCSS: true,            // import parent page css
		importStyle: false,         // import style tags
		pageTitle: "Test Title Page",              // add title to print page
		header: "<h1>Test Header<h1>",               // prefix to html
		footer: "<h1>Test Footer<h1>",               // postfix to html
		copyTagClasses: true,      // copy classes from the html & body tag
		beforePrint: function(){console.log("Before PrintThis function");},          // function called before iframe is filled
		afterPrint: function(){console.log("After PrintThis function");}            // function called before iframe is removed
	  });
      clearInterval(checkExist);
   }
}, 1000); // check every 1000ms
*/