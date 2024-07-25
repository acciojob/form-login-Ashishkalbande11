function getFormvalue() {
    //Write your code here
	var form = document.getElementById("form1");
	var firstName = form.fname.value;
	var lastName = form.lname.value;

	var fullName = firstName + " " + lastName;

	alert(fullname);
}
