function cargarFoto() {
	var nombreJuego = document.getElementById("juegos").value;
	var miImagen = document.getElementById("imagen");
	miImagen.src="imagenes/"+nombreJuego;
}

function calcularFactorial() {
	var numero = document.getElementById("numero").value;
	var f=1;
	for (var i=1; i<=numero; i++) {
		f = f * i; 
	}
	document.getElementById("factorial").innerHTML="El factorial del número es "+f;
}

function juego() {
	var miImagen = document.getElementById("img");
	miImagen.src="imagenes/"+Math.floor(Math.random()*5+1)+".jpg";
}

function calcularPar() {
	var numero = document.getElementById("numeropar").value;
	if( numero % 2 == 0 ) {
        document.getElementById ("par").innerHTML="El número es par";}
    else {
    	 document.getElementById ("par").innerHTML="El número es impar";
    }
}