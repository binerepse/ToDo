$(document).ready(function(){
	//FUNKCIJA, KI OB KLIKU NA GUMB LOGIN PREVERI EMAIL TER UPORABNIKA OPOMNI, V PRIMERU, KO JE LE TA NAPAČEN
	$(".btn-default").click(function(){
		var email = $("#email").val();
		if (!validateEmail(email)){
			alert("Vneseni email ni pravilen.");
		}
	});
	
	//FUNKCIJA ZA PREVERJANJE PRAVILNOSTI EMAILA
	var validateEmail = function(email){
		var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		return regex.test(email);
	}
});