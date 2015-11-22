$(document).ready(function(){
	
	var stevecOpravil = 0;
	var seznamOpravil = [];
	//ob pritisku na gumb Dodaj, dodamo opravilo v seznam opravil, ki jih je še potrebno opraviti.
	$("#dodajOpravilo").click(function(){
		var opravilo = $("#vnosOpravila").val();
		var datum = "<p>Rok opravila: "+$("#izbiraRoka").val()+"<\p>";
		var kategorija = "<p>Kategorija: "+$("#izbiraKategorije").val()+"<\p>";
		var prioriteta = "<p>Prioriteta: "+$("#sel1").val()+"<\p>";
		var opis = "<p>Opis: "+$("#opisOpravila").val()+"<\p>";
		if( datum ==="<p>Rok opravila: <\p>" && opis === "<p>Opis: <\p>"){
			opis = kategorija + prioriteta;
		}else if (opis === "<p>Opis: <\p>"){
			opis = datum + kategorija + prioriteta;
		}else if (datum ==="<p>Rok opravila: <\p>"){
			opis = opis + kategorija + prioriteta;
		}else{
			opis = opis + datum + kategorija + prioriteta;
		}
		if (opravilo.length > 0 && seznamOpravil.indexOf(opravilo) === -1){
			//$("#todo").append("<li class=\"list-group-item\"><input type=\"checkbox\" class=\"checkbox\">"+opravilo+"</li>");	
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
	$(document).on("click", "#icon" ,function(){
		$(this).parent().parent().parent().parent().appendTo("#done");
		$(this).remove();
		
	});
	
	$("#izbiraRoka").datepicker({
		minDate: "0"
	});
	
	$("#novoOpravilo").click(function(){
		$(this).toggle();
		$(".add").toggle("fast","linear");
	});
	
	
	
	
});

