//Variables DOM
let btn = document.querySelector(".btn");
let tareas = document.querySelector(".tareas");

//Eventos

cargarEventos()

function cargarEventos(){
    btn.addEventListener("click", agregarTarea);
    tareas.addEventListener('click', borrarTarea)
}

//Crear las tareas
function agregarTarea(e) {
  let formInput = document.querySelector(".main__form input");
  if (formInput.value === "") {
    alert("Please add a task");
  } else {

    //Crear la lista con el valor y el botton de cerrar
        let li = document.createElement("li");
        li.classList.add('item');
        let task = document.createTextNode(formInput.value);
        li.appendChild(task);
        document.querySelector(".tareas").appendChild(li);
        let button = document.createElement("button");
        button.classList.add("btn2");
        button.innerHTML = "X";
        li.appendChild(button);
    }
    //Limpiar el Input
    formInput.value = '';

  e.preventDefault();
}

function borrarTarea(e){
    if(e.target.parentElement.classList.contains('item')){
        e.target.parentElement.style.display = 'none'
    }
}

function borrarTodasLasTareas(e){
    if(e.target.parentElement.parentElement.classList.contains('tareas')){
        
    }
}


