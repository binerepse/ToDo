$(document).ready(function(){
	
	var stevecOpravil = 0;
	var seznamOpravil = [];
	//ob pritisku na gumb Dodaj, dodamo opravilo v seznam opravil, ki jih je še potrebno opraviti.
	$("#dodajOpravilo").click(function(){
		var opravilo = $("#vnosOpravila").val();
		var opis = $("#opisOpravila").val();
		if (opravilo.length > 0 && seznamOpravil.indexOf(opravilo) === -1){
			//$("#todo").append("<li class=\"list-group-item\"><input type=\"checkbox\" class=\"checkbox\">"+opravilo+"</li>");	
			stevecOpravil = stevecOpravil + 1;
			seznamOpravil.push(opravilo);
			$("#todo").append("<div class=\"panel panel-default\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#todo\" href=\"#collapse"+stevecOpravil+"\">"+opravilo+"<a href=\"#\"><span class=\"glyphicon glyphicon-ok\" id=\"icon\"></span></a></a></h4></div><div id=\"collapse"+stevecOpravil+"\" class=\"panel-collapse collapse in\"><div class=\"panel-body\">"+opis+"</div></div></div>");	
			
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
	
	
	
	
});

