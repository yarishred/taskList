//Variables DOM
let btn = document.querySelector(".btn");
let tareas = document.querySelector(".tareas");
let deleteAll = document.querySelector(".deleteBtn");
let fecha = document.querySelector(".fecha");

//Mostrar la fecha actual
let date = Date().split("2020")[0];
fecha.innerHTML = date;

let tareasArr = [];

//Eventos
cargarEventos();

function cargarEventos() {
  btn.addEventListener("click", agregarTarea);
  tareas.addEventListener("click", borrarTarea);
  deleteAll.addEventListener("click", borrarTodasLasTareas);
  document.addEventListener('DOMContentLoaded', mantenerLocalStorage)
}

//Crear las tareas
function agregarTarea(e) {
  let formInput = document.querySelector(".main__form input");
  if (formInput.value === "") {
    alert("Please add a task");
  } else {
    //Crear la lista con el valor y el botton de cerrar
    let li = document.createElement("li");
    li.classList.add("item");
    let task = document.createTextNode(formInput.value);
    li.appendChild(task);
    document.querySelector(".tareas").appendChild(li);
    let button = document.createElement("button");
    button.classList.add("btn2");
    button.innerHTML = "X";
    li.appendChild(button);

    //Almacenar en el array y en el localStorage
    tareasLocalStorage(formInput.value)
  }
  //Limpiar el Input
  formInput.value = "";

  e.preventDefault();
}

//Borrar las tareas si contienen la clase item
function borrarTarea(e) {
  if (e.target.parentElement.classList.contains("item")) {
    e.target.parentElement.style.display = "none";
  }
  borrarLocalStorage(e.target.parentElement);
};


//Borrar todas las tareas
function borrarTodasLasTareas() {
  tareas.style.display = "none";
  borrarTodo()
}

//Funcion almacenamiento  LocalStorage
function tareasLocalStorage(tasks) {
  if(localStorage.getItem('tareas') === null){
    tareasArr = []
  } else {
    JSON.parse(localStorage.getItem('tareas'))
  }
  tareasArr.push(tasks)
  localStorage.setItem('tareas', JSON.stringify(tareasArr))
  
  console.log(tareasArr)
}

//funcion mantener Local Storage

function mantenerLocalStorage() {
  if(localStorage.getItem('tareas') === null){
    tareasArr = []
    console.log(tareasArr)
  } else {
    tareasArr = JSON.parse(localStorage.getItem('tareas'));
  }
  tareasArr.forEach(tareas => {
    //Crear la lista con el valor y el botton de cerrar
    let li = document.createElement("li");
    li.classList.add("item");
    let task = document.createTextNode(tareas);
    li.appendChild(task);
    document.querySelector(".tareas").appendChild(li);
    let button = document.createElement("button");
    button.classList.add("btn2");
    button.innerHTML = "X";
    li.appendChild(button);
  })

}

//borrar del local storage
function borrarLocalStorage(tarea) {
  if(localStorage.getItem('tareas') === null){
    tareasArr = []
  } else {
    JSON.parse(localStorage.getItem('tareas'))
  }
  tareasArr.forEach(function(item, index) {
    if(tarea.textContent.split('X')[0] === item){
      tareasArr.splice(index, 1)
    }
  })
  localStorage.setItem('tareas', JSON.stringify(tareasArr))
}


//Borrar todas la tareas
function borrarTodo(){
  localStorage.clear()
}
