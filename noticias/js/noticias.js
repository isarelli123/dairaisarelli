
var noticias = obtenerNoticias();


function marcarNoticiasConWhile(){
  var contador = 0;
  while(contador < noticias.length){
    noticiaActual = noticias[contador];
    cambiarColor(noticiaActual, 'rgb(188, 164, 213)');
    contador++; //contador = contador + 1
  }
}
function marcarNoticiasConFor(palabra){
  for(var s= 0; s<noticias.length; s++){
     if(contienePalabra(noticias[s],palabra)==true){
    noticiaActual = noticias[s];
    cambiarColor(noticiaActual, 'rgb(235, 190, 162)');
  }
  }
}



function ocultarNoticiasQueContengan(palabra){
  for(var i = 0; i< noticias.length; i++){
    if(contienePalabra(noticias[i],palabra)==true){
      ocultarNoticia(noticias[i]); }
}
}

function recortarNoticias(cantPalabras){
  for(var j = 0; j< noticias.length; j++){
    recortarTexto(noticias[j],cantPalabras);
    noticias[j].querySelector("p").innerText+="...";
}
}
//resaltar las que contengan ARGENTINA:
function resaltarNoticiasQueContengan(palabra){
  for(var z=0; z<noticias.length; z++){
    if(contienePalabra(noticias[z],palabra)==true){
      noticiaActual= noticias[z];
      cambiarColor(noticiaActual, 'rgb(12, 183, 242)');
    }
  }
}
//llamado de funciones//
ocultarNoticiasQueContengan("Google");
resaltarNoticiasQueContengan("ARGENTINA");
recortarNoticias(10);
marcarNoticiasConFor("robots");
