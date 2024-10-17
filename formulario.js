// Seleccionamos el formulario con id 'form'
var formulario = document.querySelector("#form");


formulario.onsubmit = function(e) {
 
  e.preventDefault(); // Corregí 'prevent()' a 'preventDefault()'


 
  var n = formulario.elements[0];
  var ed = formulario.elements[1]; // Corregí la variable 'e' para evitar conflicto con el evento
  var na = formulario.elements[2];


 
  var nombre = n.value;
  var edad = ed.value;


 
  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;


  console.log(nombre, edad);
  console.log(nacionalidad);


 
  if (nombre.length === 0) {
    n.classList.add("error");
  }


 
  if (edad < 18 || edad > 120) {
    ed.classList.add("error"); // Corregí 'e' por 'ed' para evitar conflicto
  }


  //
  if (nombre.length > 0 && (edad >= 18 && edad <= 120)) { // Ajusté la condición de edad para que acepte 18 y 120
    agregarInvitado(nombre, edad, nacionalidad);
  }
};




var botonBorrarGlobal = document.createElement("button");
botonBorrarGlobal.textContent = "Eliminar todos los invitados";
botonBorrarGlobal.id = "boton-borrar";
var corteLineaGlobal = document.createElement("br");
document.body.appendChild(corteLineaGlobal);
document.body.appendChild(botonBorrarGlobal);


function agregarInvitado(nombre, edad, nacionalidad) {
  // Corregir las nacionalidades con base en sus valores
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }


 
  var lista = document.getElementById("lista-de-invitados");


 
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista"); // Corregí 'classList.added' por 'classList.add'
  lista.appendChild(elementoLista);


 
  function crearElemento(descripcion, valor) {
    var span = document.createElement("span");
    var input = document.createElement("input");
    var espacio = document.createElement("br");
    span.textContent = descripcion + ": ";
    input.value = valor;
    input.readOnly = true; // Evitar que los campos sean editables
    elementoLista.appendChild(span);
    elementoLista.appendChild(input);
    elementoLista.appendChild(espacio);
  }


 
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


 
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.classList.add("boton-borrar");
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);


 
  botonBorrar.onclick = function() {
    elementoLista.remove(); // Eliminar el elemento del DOM
  };
}




botonBorrarGlobal.onclick = function() {
  var lista = document.getElementById("lista-de-invitados");
  lista.innerHTML = ""; // Limpia todo el contenido de la lista
};
