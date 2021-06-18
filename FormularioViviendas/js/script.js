function calcularPrecio() {
	var zona = document.getElementById("zona");
	var precio_alquiler;
	var aumento;
	var precio_total;
	var nombreZona = zona.options[zona.selectedIndex].innerText;

	// zona.value tiene el precio por metro.
	if (document.getElementById("pqñ").checked) {
		precio_alquiler = zona.value * 50;
	}
	else if (document.getElementById("med").checked) {
		precio_alquiler = zona.value * 70;
	}

	else if (document.getElementById("grn").checked) {
		precio_alquiler = zona.value * 100;
	}

	aumento=0;

	if (document.getElementById("calefaccion").checked) {
		aumento = aumento + 0.03;
	}

	if (document.getElementById("aire").checked) {
		aumento = aumento + 0.03;
	}

	if (document.getElementById("bañera").checked) {
		aumento = aumento + 0.03;
	}

	aumento = (precio_alquiler * aumento);

	precio_total = aumento + precio_alquiler;

	document.getElementById("salida").innerText = "El precio por metro en " + nombreZona + " es de " + zona.value +
 " euros, el precio del alquiler de la vivienda es de " + precio_alquiler + " euros, el precio del aumento por mejoras es de " + aumento +
 " euros, y el precio total es de " + precio_total + " euros."

}


 