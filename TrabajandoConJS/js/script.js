let canciones=[];
canciones[0]=["Nothing compares to you", "Sinead O connor"];
canciones[1]=["Still Loving You", "Scorpions"];
canciones[2]=["The Scientist","Coldplay"];
canciones[3]=["A Sky Full Of Stars","Coldplay"];
canciones[4]=["Scorpions lady","Scorpions"];
canciones[5]=["Nothing else matters","Metalica"];
canciones[6]=["Me paro cuando suena","Orquesta de las nubes"];
canciones[7]=["Bohemian rhapsody","Queen"];
canciones[8]=["Imagine","John Lennon"];
canciones[9]=["Another One Bites the Dust","Queen"];

onload = listadocanciones;


function mostrarcanciones() {
		var texto = " ";
	for (var i=0; i<canciones.length; i++) {
		 texto = texto + "<li>"+canciones[i][0] + ", "
		+ canciones[i][1] + "</li> ";
	}
	document.getElementById("canciones").innerHTML = "<h2> Listado de canciones: </h2>" + texto;
}

function mostrarqueen() {
		var texto = " ";
			for (var i=0; i<canciones.length; i++) {
				if (canciones[i][1] == "Queen") {
				 texto = texto + "<li>"+canciones[i][0] + ", "
				+ canciones[i][1] + "</li> ";
				}
			}
			document.getElementById("queen").innerHTML = "<h2> Listado de canciones de Queen: </h2>" + texto;
		}

function mostrarcoldplay() {
		var texto = " ";
			for (var i=0; i<canciones.length; i++) {
				 if (canciones[i][1] == "Coldplay") {
						 texto = texto + "<li>"+canciones[i][0] + ", "
						+ canciones[i][1] + "</li> ";
						}
			}
	document.getElementById("coldplay").innerHTML = "<h2> Listado de canciones de Coldplay: </h2>" + texto;
}


function listadocanciones() {
	var texto = " ";
	for (var i=0; i<canciones.length; i++) {
		 texto = texto + "<option value='" + i + ".jpg'>" +canciones[i][0] + ", "
				+ canciones[i][1] + "</option> ";
	}
	document.getElementById("listado").innerHTML = texto;
}

let url=[];
url[0]=["https://www.youtube.com/watch?v=0-EF60neguk"];
url[1]=["https://www.youtube.com/watch?v=CjRas1yOWvo"];
url[2]=["https://www.youtube.com/watch?v=RB-RcX5DS5A"];
url[3]=["https://www.youtube.com/watch?v=VPRjCeoBqrI"];
url[4]=["https://www.youtube.com/watch?v=fJbzaq9Wqiw"];
url[5]=["https://www.youtube.com/watch?v=tAGnKpE4NCI"];
url[6]=["https://www.youtube.com/watch?v=ASZEnanYfk4&list=PL_PMRAqFR4MsQa9QJzRarrfUmNcgJ_Rv5"];
url[7]=["https://www.youtube.com/watch?v=fJ9rUzIMcZQ"];
url[8]=["https://www.youtube.com/watch?v=L6svOHFSAH8"];
url[9]=["https://www.youtube.com/watch?v=rY0WxgSXdEE"];

function cargarfoto() {
	var nombrecancion = document.getElementById("listado").value;
	var miImagen = document.getElementById("imagen");
	miImagen.src="imagenes/"+nombrecancion;
}

