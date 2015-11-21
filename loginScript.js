$(document).ready(function(){
	$(".btn-default").click(function(){
		var email = $("#email").val();
		if (!validateEmail(email)){
			alert("Vneseni email ni pravilen.")
		}
	});
	
	var validateEmail = function(email){
		var regex = /\S+@\S+\.\S+/;
		
		return regex.test(email);
	}
});