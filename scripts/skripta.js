$(document).ready(function(){
	
	var stevecOpravil = 0;
	var seznamOpravil = [];
	//FUNKCIJA, KI DOLOČA KAJ SE ZGODI KO KLIKNEMO NA GUMB DODAJ
	$("#dodajOpravilo").click(function(){
	//POBIRANJE VREDNOSTI IZ OBRAZCA
		var opravilo = $("#vnosOpravila").val();
		var datum = "<p>Rok opravila: "+$("#izbiraRoka").val()+"<\p>";
		var kategorija = "<p>Kategorija: "+$("#izbiraKategorije").val()+"<\p>";
		var prioriteta = "<p>Prioriteta: "+$("#sel1").val()+"<\p>";
		var opis = "<p>Opis: "+$("#opisOpravila").val()+"<\p>";
		//SESTAVLJANJE OPISA DODANEGA OPRAVILA
		if( datum ==="<p>Rok opravila: <\p>" && opis === "<p>Opis: <\p>"){
			opis = kategorija + prioriteta;
		}else if (opis === "<p>Opis: <\p>"){
			opis = datum + kategorija + prioriteta;
		}else if (datum ==="<p>Rok opravila: <\p>"){
			opis = opis + kategorija + prioriteta;
		}else{
			opis = opis + datum + kategorija + prioriteta;
		}
		//PREVERJANJE, ALI JE OPRAVILO Z ENAKIM IMENOM ŽE DODANO TER ALI UPORABNIK NI VNESEL NIČ
		if (opravilo.length > 0 && seznamOpravil.indexOf(opravilo) === -1){
			stevecOpravil = stevecOpravil + 1;
			seznamOpravil.push(opravilo);
			$(".add").toggle();
			$("#novoOpravilo").toggle();	
			$("#todo").append("<div class=\"panel panel-default\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#todo\" href=\"#collapse"+stevecOpravil+"\">"+opravilo+"<a href=\"#\"><span class=\"glyphicon glyphicon-ok\" id=\"icon\"></span></a></a></h4></div><div id=\"collapse"+stevecOpravil+"\" class=\"panel-collapse collapse in\"><div class=\"panel-body\">"+opis+"</div></div></div>");
			$("#vnosOpravila").val("");
			$("#izbiraRoka").val("");
			$("#izbiraKategorije").val("");
			$("#opisOpravila").val("");
		}else{
			alert("Poskusili ste dodati prazno opravilo, ali pa opravilo ki že obstaja.");
		}
	});
	
	//FUNKCIJA, KI OPRAVILO IZBRIŠE IZ SEZNAMA TODO NA SEZNAM DONE S POMOČJO KLIKA NA KLJUKICO
	$(document).on("click", "#icon" ,function(){
		$(this).parent().parent().parent().parent().prependTo("#done");
		$(this).remove();
		
	});
	
	//OMEJITEV DATEPICKERJA NA MINIMALNI MOŽEN DATUM: DANES
	$("#izbiraRoka").datepicker({
		minDate: "0"
	});
	
	//FUNKCIJA, KI SKRIJE OBRAZEC ZA OPIS OPRAVILA, PO TEM KO UPORABNIK KLIKNE GUMB DODAJ
	$("#novoOpravilo").click(function(){
		$(this).toggle();
		$(".add").toggle("fast","linear");
	});

});

