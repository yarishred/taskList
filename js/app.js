//Variables DOM
let btn = document.querySelector(".btn");
let tareas = document.querySelector(".tareas");
let deleteAll = document.querySelector('.deleteBtn')
let fecha = document.querySelector('.fecha');

//Mostrar la fecha actual
let date = Date().split('2020')[0];
fecha.innerHTML = date;


//Eventos
cargarEventos()

function cargarEventos(){
    btn.addEventListener("click", agregarTarea);
    tareas.addEventListener('click', borrarTarea);
    deleteAll.addEventListener("click", borrarTodasLasTareas);

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

//Borrar las tareas si contienen la clase item
function borrarTarea(e){
    if(e.target.parentElement.classList.contains('item')){
        e.target.parentElement.style.display = 'none'
    }
}

//Borrar todas as tareas
function borrarTodasLasTareas(){
   tareas.style.display = 'none';
}


