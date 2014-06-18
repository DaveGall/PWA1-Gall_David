/*David Gall, Validation assignment, 06/16/14
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function() {

    var username = document.getElementById('f_username');
    var email = document.getElementById('f_email');
    var phoneNumber = document.getElementById('f_phone');
    var ssn = document.getElementById('f_ssn');
    var password = document.getElementById('f_password');
    var pattern = /^([A-Z][a-z]+)\s([A-Z][a-zA-Z-]+)$/;
    //var nameCheck = pattern.test(id);
    console.log(username+", "+email+"' "+phoneNumber+", "+ssn+", "+password);


    //console.log(nameCheck);


    // var pattern = /^([A-Z][a-z]+)\s([A-Z][a-zA-Z-]+)$/;
    //var nameCheck = pattern.test(id);
    //console.log(nameCheck);
    myform.onsubmit = function (e) {

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        validateField(name);  //id = is the form input field ID


        e.preventDefault();
        return false;
    };


    var validateField = function (inputName) {
        if (/^([A-Z][a-z]+)\s([A-Z][a-zA-Z-]+)$/.test(username.value)) {
            console.log('Name is correct');
        } else {
            console.log('Wrong name value');
        }
        if (inputName.name === /^([A-Z][a-z]+)\s([A-Z][a-zA-Z-]+)$/.test(username.value)){

            //  console.log("This is correct");
            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.


        }

        var pass = /^([A-Z][a-z]+)\s([A-Z][a-zA-Z-]+)$/.test(username.value);
        var errorMsg = inputName.nextSibling;/*.nextSibling.nextSibling.nextSibling;*/

        if (!pass || inputName.value.length < 2) {
            errorMsg.style.display = 'block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5) {
            errorMsg.style.display = 'none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display = 'none';
            inputName.style.backgroundColor = 'white';
        }

    };


})();  // end wrapper





