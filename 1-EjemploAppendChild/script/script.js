function add() {
	// Recupero el elemento <select>
	var lis = document.getElementById("lista");
	
	// Recupero el nombre que introdujo el usuario.
	var nombre = document.getElementById("nombre").value;

	// Creo un nodo de texto con el nombre introducido.
	var valor = document.createTextNode(nombre);

	// Creo un nodo tipo <option> 
	var nodo = document.createElement("option");
	nodo.appendChild(valor);

	// Asigno propiedad value al option
	nodo.value=nombre;

	lis.appendChild(nodo);
	alert("Añadido con éxito, van "+lis.options.length);

	document.getElementById("nombre").value="";
}

function recuperar() {
	var lis = document.getElementById("lista");
	var seleccionado = lis.options.selectedIndex;
	alert(seleccionado+" - "+lis.options[seleccionado].value);
}