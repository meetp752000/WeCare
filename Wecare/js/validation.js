$(document).ready(init);

function init() {
    $(".error").hide();
    $("#submit_btn").click(validate);
    $("#submit_btn2").click(sub);
}

function sub(event) {
    $(".error").hide();
    var uname = $("input#uname").val();
    var error = 0;

    if (uname == "") {
        $("label#uname_error").show();
        error++;
    }
    if (error != 0) {
        return false;
    }
}

function validate(event) {
    $(".error").hide();
    var firstname = $("input#firstname").val();
    var lastname = $("input#lastname").val();
    var email = $("input#email").val();
    var password = $("input#password").val();
	var country = $("input#country").val();
	var state = $("input#state").val();
	var zip = $("input#zip").val();
	var age = $("input#age").val();
	var username = $("input#username").val();
	var gender = $("input#gender").val();
	var phone = $("input#phone").val();
	var iplan = $("input#iplan").val();
	var plantype = $("input#plantype").val();
	var error = 0;


    var letters = /[A-Za-z]/;
    var nums = /[0-9]/;
    var schar = /[!@#$%&*+-=:<>?]/;


    if (firstname == "") {
        $("label#firstname_error").show();
        error++;
    }


    if (iplan == "") {
        $("label#iplan_error").show();
        error++;
    }
    if (nums.test(firstname)) {
        alert("First name should contain no symbols or numbers!");
        error++;
    }

    if (lastname == "") {
        $("label#lastname_error").show();
        error++;
    }

    if (nums.test(lastname)) {
        alert("Lastname should contain no symbols or numbers!");
        error++;
    }

    if (phone == "") {
        $("label#phone_error").show();
        error++;

    }

    if (email == "") {
        $("label#email_error").show();
        error++;

    }

    if (username == "") {
        $("label#username_error").show();
        error++;

    }

    if (password == "") {
        $("label#password_error").show();
        error++;
    }
    
	if((password.length <= 7)|| (!nums.test(password))|| (!schar.test(password))) {
        alert("Password should be atlease 8 characters long and must be a combination of letter(s), number(s) and special charactr(s).");
        error++;
		}
        if (country == "") {
        $("label#country_error").show();
        error++;
		}

        if (state == "") {
        $("label#state_error").show();
        error++;
		}
		
        if (zip == "") {
        $("label#zip_error").show();
        error++;
		}
		
		if((!nums.test(zip)) && (!letters.test(zip)) ) {
        alert("Invalid Zip");
        error++;			
		}

    if (lastname == "" || firstname=="" || email=="" || password=="" || country=="" || state=="" || zip=="") {
        alert("All Fields Are Required!");
        error++;
    }

    if ((!nums.test(phone))||(letters.test(phone))||(schar.test(phone))) {
        alert("Phone number should only consist of numbers");
        error++;
    }

    if (age == "") {
        $("label#age_error").show();
        error++;
    }


    if (error != 0) {
        return false;
    }
    
        alert("First name: " + firstname + "\nLast name: " + lastname + "\nEmail: " + email + "\nPassword: " + password);
    
}



