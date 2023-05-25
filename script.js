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