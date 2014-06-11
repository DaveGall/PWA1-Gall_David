// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = ''
	;
	
	// Validates search query
	var validqte = function(query){//This line starts the function that will evaluate the length of your search input.
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){//This while loop is used to trim the white space from the front of the search text.
			query = query.substring(1, query.length);
		};
		while(query.charAt(query.length-1) === "") {//This is used to trim the end of the search input text.
            query = query.substring(0, query.length - 1);
        };
		
		// Check search length, must have 3 characters
		if(query.length < 3){//This is a parameter of the for loop to check and see if the search text is less than 3.
			alert("Your search query is too small, try again.");//Alert box that will display if your search input is less than 3 characters.
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
		};
		
		search(query);
	};

	// Finds search matches
	var search = function(query){//Beginning of a function with a parameter of query set.
		
		// split the user's search query string into an array
		var queryArray = query.split(" ");
		
		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) {//i=0 variable for the index set at 0, j is set to grab the length of the database being referenced; i is being set to as long as it is less than j to run this loop; i++ to add one after each loop.

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');//Sets a variable that will grab each database index by using the | that ends each one.
            var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);//Changes each database entry to lowercase so that it can be read correctly.

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {//ii is setting the index at 0, jj is being set to the queryArray's length; ii is being set to run as long as it is less than jj; ii++ is setting it up to add one after each loop.
                var qitem = queryArray[ii].toLowerCase();//This changes all the items in qitem to all lowercase.

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem);//The variable that is being set up to be compared with the results.
                if (compare !== -1) {//An if statement with the parameters of comparing the search with items in the database.
                    results.push(db[i]);//If true this will give the results.
                }

            }

        };
		
		results.sort();
		
		// Check that matches were found, and run output functions
		if(results.length === 0){
			noMatch();
		}else{
			showMatches(results);
		};
	};

	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>';

		resultsDIV.innerHTML = html;
	};

	// Put matches into page as paragraphs with anchors
	var showMatches = function(results) {

        // THE NEXT 4 LINES ARE CORRECT.
        var html = '<p>Results</p>',
            title,
            url;

		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].substring(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {
        var query = searchInput.value;
        validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
    };

})();