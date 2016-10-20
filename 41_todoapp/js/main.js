function (){
	var lista = document.getElementById ("lista"),
		tareaInput = document.getElementById ("tareaInput"),
		btnNuevo = document.getElementById ("agregar");
}

var agregarTarea = function(){};
var comprobarInput = function(){};
var eliminarTarea = function(){};

btnNuevaTarea.addEventListener ("click, agregarTarea");

tareaInput.addEventListener("click",comprobarInput);

for (var i = 0; i <= lista.children.length -1; i ++){
	lista.children[i].addEventListener("click",eliminarTarea);
}