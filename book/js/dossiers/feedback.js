validate = function() {
	var f = document.feedbackForm ;
	if (f.firstName.value.length === 0) {
		alert('First Name is required') ;
		return false ;
	} else if (f.lastName.value.length === 0) {
		alert('Last Name is required') ;
		return false ;
	} else if (f.email.value.length === 0) {
		alert('Email Address is required') ;
		return false ;		
	} else if (f.comments.value.length === 0) {
		alert('Comments are required') ;
		return false ;
	}
	return true ;
}