var facturas = [{
		"numero": 1000,
		"fecha": "30-04-2019",
		"cliente": {
			"nif": "516667788A",
			"nombre": "Pepe Sánchez",
			"tlf": "61777888"
		},
		"detalle": [{
			"producto": "Impresora Láser",
			"precio": 85,
			"cantidad": 2
		}, {
			"producto": "CPU",
			"precio": 480,
			"cantidad": 1
		}, {
			"producto": "Disco duro portatil",
			"precio": 53,
			"cantidad": 2
		}]
	},
	{
		"numero": 1001,
		"fecha": "01-05-2019",
		"cliente": {
			"nif": "61777888J",
			"nombre": "Juan López",
			"tlf": "677888999"
		},
		"detalle": [{
			"producto": "Impresora de tinta",
			"precio": 45,
			"cantidad": 3
		}, {
			"producto": "Caja de 100 CDs",
			"precio": 12,
			"cantidad": 2
		}, {
			"producto": "Disco duro portatil",
			"precio": 51,
			"cantidad": 1
		}]
	}
]

onload=llenarLista;

function llenarLista(){
 	// Recupero el elemento <select>
	var lista = document.getElementById("lista");
	
	for (var i=0; i<facturas.length; i++) {
		var c = facturas[i].numero + " / " + facturas[i].fecha;
		var valor = document.createTextNode(c);
		var nodo = document.createElement("option");
		nodo.appendChild(valor);
		nodo.value=c;
		lista.appendChild(nodo);
	}

	leerFactura();
}

function leerFactura() {
	var leyenda= document.getElementById("leyenda");

	var fac = document.getElementById("lista");
	var i = fac.options.selectedIndex;

	leyenda.innerHTML = "Factura " +facturas[i].numero;

	var datos = document.getElementById("datosFactura");
	datos.innerHTML = "<p>Nº Factura: "+facturas[i].numero +
	 	"&nbsp;&nbsp;&nbsp;&nbsp; Fecha: "+facturas[i].fecha+"</p>";
	datos.innerHTML = datos.innerHTML + 
		"<p>Cliente: "+facturas[i].cliente.nif + 
		"&nbsp;&nbsp;&nbsp; "+facturas[i].cliente.nombre +
		"&nbsp;&nbsp;&nbsp; Tlf: "+facturas[i].cliente.tlf+"</p>";

	var det = document.getElementById("detalle");	

	det.innerHTML="";
	for (var d=0; d<facturas[i].detalle.length; d++) {
		det.innerHTML = det.innerHTML + "<tr>" +
			"<td class='arti'>"+facturas[i].detalle[d].producto+"</td>" +
			"<td class='dere'>"+facturas[i].detalle[d].cantidad+"</td>" +
			"<td class='dere'>"+facturas[i].detalle[d].precio+"</td>" +
			"<td class='dere'>"+facturas[i].detalle[d].precio*facturas[i].detalle[d].cantidad+"</td>" +
			"</tr>";
	}
	
}