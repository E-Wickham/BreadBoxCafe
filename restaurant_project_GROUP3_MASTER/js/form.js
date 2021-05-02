/* Form functionality */

window.onload = function(){ 
	var fnameMsg = document.getElementById("fname");
	var nameError = document.getElementById("nameErr");

	var lnameMsg = document.getElementById("lname");
	var emailMsg = document.getElementById("email");
console.log('loaded');

    var formHandle = document.forms.eventbooking;
    
    var thankYou = document.getElementById("thankyoumsg");
    
	var customerName = document.getElementById("thanksCustomer");
	
    var saveBtn = document.getElementById("button");
    console.log(formHandle.fname.value)

	//function to handle and validate the form data. 
	function processForm() {

		//alert("form data sent to server");
		var fnameInput = formHandle.fname.value;
        console.log(fnameInput);
        
        var lnameInput = formHandle.lname.value;
		console.log(lnameInput);

		var emailValue = formHandle.email.value;
		console.log(emailValue);
		
	


		if (fnameInput.value === "") {
			fnameMsg.style.background = "red";
			fnameMsg.style.color = "white";
			nameError.innerHTML = "Please enter your name";
			fnameInput.focus();
            return false;
        }
        else if (lnameInput.value === "") {
            lnameMsg.style.background = "red";
            lnameMsg.style.color = "white";
            nameError.innerHTML = "Please enter your name";
            lnameInput.focus();
            return false;

		} else if (emailValue.value === "") {
			emailMsg.style.background = "red";
			emailMsg.style.color = "white";
			emailMsg.innerHTML = "enter a valid email";
			emailMsg.focus();
			return false;

		}	
		else {
			formHandle.style.display = "none";
			thankYou.style.display = "block";
			customerName.innerHTML = fnameInput.value;
			return false;
		}
	
	}

	formHandle.onsubmit = processForm;
	
}