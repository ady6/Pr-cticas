function validar() {
	var gl = document.getElementById("golesLocal").value;
	var gv = document.getElementById("golesVisitante").value;
	var el = document.getElementById("equipoLocal").value;
	var ev = document.getElementById("equipoVisitante").value;
	
	if (el=="" || ev=="" || gl=="" || gv=="")
	{
		return "Faltan datos, no hay resultado";
	}
	
	if (isNaN(gl*gv))
	{
		return "Los goles deben ser valores num&eacute;ricos";
	}	
	
	return "OK";
}

function comprobar() {
	var resultado=validar();
	if (resultado=="OK") {
		var gl = document.getElementById("golesLocal").value;
		var gv = document.getElementById("golesVisitante").value;
		var el = document.getElementById("equipoLocal").value;
		var ev = document.getElementById("equipoVisitante").value;
	
		gl=parseInt(gl);
		gv=parseInt(gv);
		
		if (gl==gv) {
			document.getElementById("resultado").innerHTML = 
				"Empate entre " + el + " y " + ev;
		}
		else if (gl>gv) {
			document.getElementById("resultado").innerHTML = 
				"Victoria local, ganador " + el;		
		}
		else {
			document.getElementById("resultado").innerHTML = 
				"Victoria visitante, ganador " + ev;	
		}
	}
	else {
		document.getElementById("resultado").innerHTML = resultado;
	}
}

function enviar() {
	var resultado=validar();
	if (resultado=="OK") {
		document.getElementById("formFutbol").submit();
	}
	else {
		alert("No se puede enviar el partido porque faltan datos");
	}	
}