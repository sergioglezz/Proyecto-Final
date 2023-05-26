function mostrarDivDerecha() {
    var divDerecha = document.getElementById("menu-derecha");
    divDerecha.classList.toggle("mostrar");
}

function ocultarDivDerecha() {
    var divDerecha = document.getElementById("menu-derecha");
    divDerecha.classList.remove("mostrar");
}

var modo = leerModoActual();
if (modo=="dia") {
    ponerModoDia();    
} else {
    ponerModoNoche();
}


function leerModoActual() {    
    let modo = window.localStorage.getItem("--modoGuardado");
    if (!modo) {
        // devolverá modo DIA si no hay modo guardado
        /* 
        leer el --modoGuardado de nuestro CSS original
                */

        modo=document.documentElement.style.getPropertyValue("--modoGuardado");
        // modo = getComputedStyle(document.documentElement).getPropertyValue('--modoGuardado');


    };
    return modo;
}

function ponerModoDia() {

    // ponemos letra oscura sobre fondo blanco
    let cuerpo=document.getElementById("cuerpo");
    cuerpo.style.color="black";
    cuerpo.style.backgroundColor="#E2E2E2";
    let menu=document.getElementById("menu");
    menu.style.color="black";
    menu.style.backgroundColor="#CCCCCC";
    let menuderecha=document.getElementById("menu-derecha");
    menuderecha.style.color="black";
    menuderecha.style.backgroundColor="#CCCCCC";
    let modal=document.getElementById("modal-content");
    modal.style.backgroundColor="#CCCCCC"
    window.localStorage.setItem("--modoGuardado","dia");

    // ocultamos el sol
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display="none";

    // mostramos la luna
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display="block";
    
}


function ponerModoNoche() {

    // ponemos letra clara sobre fondo oscuro
    let cuerpo=document.getElementById("cuerpo");
    cuerpo.style.color="white";
    cuerpo.style.backgroundColor="#1d1d1d";
    let menu=document.getElementById("menu");
    menu.style.color="white";
    menu.style.backgroundColor="#333333";
    let menuderecha=document.getElementById("menu-derecha");
    menuderecha.style.color="white";
    menuderecha.style.backgroundColor="#333333";
    let modal=document.getElementById("modal-content");
    modal.style.backgroundColor="#333333"
    window.localStorage.setItem("--modoGuardado","noche");

    // mostramos el sol
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display="block";

    // ocultamos la luna
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display="none";
    
}

//Cargar nombre de usuario
var username = sessionStorage.getItem("username");
var userMessage = document.createElement("div");
userMessage.className = "user-message";
userMessage.textContent = username ? username : "Sin identificar";
document.body.appendChild(userMessage);

// Guardar nombre de usuario
function saveUsername() {
  var usernameInput = document.getElementById("usernameInput");
  var newUsername = usernameInput.value;
  sessionStorage.setItem("username", newUsername);
  userMessage.textContent = newUsername ? newUsername : "Sin identificar";
  usernameInput.value = "";
}

function changeIconSize(size) {
    var mapa = document.getElementById("mapa")
      if (size === "small") {
        document.getElementById("small").checked = true;
        mapa.style.width = "300px";
        localStorage.setItem("iconSize", "small");
      } else if (size === "medium") {
        document.getElementById("medium").checked = true;
        mapa.style.width = "600px";
        localStorage.setItem("iconSize", "medium");
      } else if (size === "large") {
        document.getElementById("large").checked = true;
        mapa.style.width = "100vw";
        localStorage.setItem("iconSize", "large");
      }
    }
  
  if (localStorage.getItem("iconSize")) {
    changeIconSize(localStorage.getItem("iconSize"))
  }

  // Obtén la referencia a la ventana modal y al botón de cierre
var modal = document.getElementById("myModal");
var closeButton = document.getElementsByClassName("close")[0];

// Función para abrir la ventana modal
function openModal() {
  modal.style.display = "block";
}

// Función para cerrar la ventana modal
function closeModal() {
  modal.style.display = "none";
}

// Cierra la ventana modal si el usuario hace clic fuera del contenido
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

console.log("Vamos Alonso a por la 33")