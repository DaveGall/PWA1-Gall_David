//David Gall, 06/06/2014, Assignment Debugging Search Engine.
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = ''
	;
	
	// Validates search query
	var validate = function(query){ //misspelled variable, validate is the correct spelling. Also instead of a single assignment operator there is a double equals to compare two values.
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) == " "){ //The = operator should be a == to show comparison not an assignment.
			query = query.substring(1, query.length);//Should be 0  query.length.
		};
		while(query.charAt(query.length(-1)) === "") {//Added an opening parenthesis for the query length and a closing parenthesis for query.charAt.
            query = query.substring(0, query.length - 1);//This gets the length of the input into the search query bar.
        };// Closing bracket missing for this while statement.
		
		// Check search length, must have 3 characters
		if(query.length < 3){ //Part that checks to see if the input is at least 3 characters.
			alert("Your search query is too small, try again."); //This line was missing a closing quotation. Displays if search doesn't match the criteria.
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;//Should return currentSearch variable.
		};
		
		search(query);
	};
	
	// Finds search matches
	var search = function(query){ //Missing bracket after the function parameter.

		// split the user's search query string into an array
		var queryArray = query.join("");//To change query to an array you need to use .split. Join makes an array a string.

		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) {

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');//Grabs each title separately.
            var dbitem = db[i].tolowercase().substring(0, dbTitleEnd); // variable needs to be written in camel Case. dbItem. Changes all characters to lowercase.

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) { //Conditions to use for searching the input letters.
                var qitem = queryArray[ii].tolowercase();//qitem should be written in camelCase. Each input letter is changed to a lowercase.

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem);//dbItem should be written in camelCase like the variable.
                if (compare !== -1) {//If the variable compare does not equal -1 then run the code on the following line.
                    results.push(db[i]);//Code to run if the above condition is true.
                }

            } //Missing closing bracket to close off the for loop.

        };//Missing closing bracket to close off the function.

		results.sort();//Sorts the order of the array of results from the search.

		// Check that matches were found, and run output functions
		if(results.length = 0){ //Does not need an assignment operator of = it should be ==
			noMatch();//Displays if true and the input equals 0.
		}else{
			showMatches(results);//This will display results of your search.
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){//If you don't type in java or javascript this function will run.
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',//This section of code displays when the input matches java or javascript.
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
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
        validate(query);//Another misspelling of validate.

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
    };//Closing bracket of the function was missing.

})();