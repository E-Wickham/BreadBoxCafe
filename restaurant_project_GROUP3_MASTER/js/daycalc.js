window.onload = function daycalc(){ 
    //Get Weekend dates
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();

    var opt1day = month + "/" + day;
    var opt6day;
    var opt5day;
    var opt4day;
    var opt3day;
    var opt2day;
    var daylimit;


    //Setting day length for months
    switch( month ) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
          daylimit = 31;
          break;
        case 4: case 6: case 9: case 11: 
            daylimit = 30;
            break;
        case 2:
            daylimit = 28;
            break;

    }

    //calculating months and days based on month length




    if (day+5>daylimit) {
        opt6day = (month+1) +"/"+((day+5)-daylimit);
        console.log(opt6day);
    } else {
        opt6day = month +"/"+(day+5);
    }

    if (day+4>daylimit) {
        opt5day = (month+1) +"/"+((day+4)-daylimit);
        console.log(opt5day);
    } else {
        opt5day = month +"/"+(day+4);
    }

    if (day+3>daylimit) {
        opt4day = (month+1) +"/"+((day+3)-daylimit);
        console.log(opt4day);
    } else {
        opt4day = month +"/"+(day+3);
    }

    if (day+2>daylimit) {
        opt3day = (month+1) +"/"+((day+2)-daylimit);
        console.log(opt3day);
    } else {
        opt3day = month +"/"+(day+2);
    }

    if (day+1>daylimit) {
        opt2day = (month+1) +"/"+((day+1)-daylimit);
        console.log(opt2day);
    } else {
        opt2day = month +"/"+(day+1);
    }

    document.getElementsByName('n_date')[0].options[0].innerHTML = opt1day;
    document.getElementsByName('n_date')[0].options[1].innerHTML = opt2day;
    document.getElementsByName('n_date')[0].options[2].innerHTML = opt3day;
    document.getElementsByName('n_date')[0].options[3].innerHTML = opt4day;
    document.getElementsByName('n_date')[0].options[4].innerHTML = opt5day;
    document.getElementsByName('n_date')[0].options[5].innerHTML = opt6day;






    //form validation




    var fnameMsg = document.getElementById("i_fname");
	var nameError = document.getElementById("nameErr");

	var lnameMsg = document.getElementById("i_lname");
    var emailMsg = document.getElementById("i_email");
    
    console.log('loaded');

    var formHandle = document.forms.eventbooking;
    
    var thankYou = document.getElementById("thankyoumsg");
    
    var customerName = document.getElementById("thanksCustomer");
    var dateBooking = document.getElementById("bookingDay")
	
    var saveBtn = document.getElementById("button");
    console.log(formHandle.n_fname.value)

	//function to handle and validate the form data. 
	function processForm() {

		//alert("form data sent to server");
		var fnameInput = formHandle.n_fname;
        console.log(fnameInput.value);
        
        var lnameInput = formHandle.n_lname;
		console.log(lnameInput.value);

		var emailValue = formHandle.n_email;
        console.log(emailValue.value);
        
        var dayValue = formHandle.n_date;
        console.log(dayValue.value);

	


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