onload=registrarEventos;

var contador = 0;

function registrarEventos() {
	document.getElementById("pa1").onclick = escribir;
	document.getElementById("pa2").onclick = escribir;
	document.getElementById("pa3").onclick = escribir;
	document.getElementById("pa4").onclick = escribir;

	document.getElementById("img").onmouseover = cambia;
	document.getElementById("img").onmouseout = recupera;
}

function pulsar(elemento) {
	var f = new Date();
	elemento.innerText = "Hola caracola a las " + 
		f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();
}

function escribir() {
	contador++;
	var e = window.event;
	// e.currentTarget nos da la referencia del párrafo (<p>)
	// donde se hizo clic
	e.currentTarget.innerText = "Click nº " + contador;
}

function mostrarPosicion() {
	var e = window.event;
	document.getElementById("posicion").innerText = 
	 "Coordenadas puntero ratón: " + e.clientX + "," + e.clientY;
}

function cambia() {
	document.getElementById("img").src="imagenes/bart2.png"
}

function recupera() {
	document.getElementById("img").src="imagenes/bart1.png"
}

function detectarTecla() {
	var e = window.event;
	alert("Tecla pulsada: " + e.keyCode + "  " + e.key);

	// Anula el último evento si es anulable.
	if (e.key=="a") e.preventDefault();
}

function jugarConObjetos() {
	window.alert("Resolución monitor: " + 
		window.screen.width + " " + 
		window.screen.height);


    var texto = navigator.appName + "\n" +
        navigator.appCodeName + "\n" +
        navigator.appVersion;

    alert(texto);

}