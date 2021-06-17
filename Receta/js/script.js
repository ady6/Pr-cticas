var miReceta = {
 	"receta": "Bizcocho",
 	"ingredientes": [{
 			"ingrediente": "Huevos",
 			"cantidad": 3,
 			"medida": "unidades"
 		},
 		{
 			"ingrediente": "Yogurt natural",
 			"cantidad": 1,
 			"medida": "unidad"
 		},
 		{
 			"ingrediente": "Levadura",
 			"cantidad": 1,
 			"medida": "sobre"
 		},
 		{
 			"ingrediente": "Azúcar",
 			"cantidad": 2,
 			"medida": "Medidas de vaso de yogurt"
 		},
 		{
 			"ingrediente": "Sal",
 			"cantidad": 1,
 			"medida": "Pizca"
 		},
 		{
 			"ingrediente": "Harina",
 			"cantidad": 2,
 			"medida": "Medidas de vaso de yogurt"
 		},
 		{
 			"ingrediente": "Cola cao",
 			"cantidad": 1,
 			"medida": "Medida de vaso de yogurt"
 		},
 		{
 			"ingrediente": "Aceite",
 			"cantidad": 1,
 			"medida": "Medida de vaso de yogurt"
 		}
 	]
 }

onload = mostrarReceta;


function mostrarReceta() {
	document.getElementById("receta").innerText = "Receta: " + miReceta.receta;
	mostrarIngredientes();
}


function mostrarIngredientes() {
		var texto = " ";
	for (var i=0; i<miReceta.ingredientes.length; i++) {
		 texto = texto + "<li>"+miReceta.ingredientes[i].cantidad+ " "
		+ miReceta.ingredientes[i].medida+ " de " +miReceta.ingredientes[i].ingrediente + "</li> ";
	}
	document.getElementById("ingredientes").innerHTML = "Los ingredientes son:" + texto;
	mostrarElaboracion();
}

function mostrarElaboracion() {
	document.getElementById("elaboracion").innerText = "Mezcla todos los ingredientes con mucho cariño, vuelca la masa en un molde para bizcocho manchado de mantequilla y hornea durante 40 minutos a 190 grados";
}