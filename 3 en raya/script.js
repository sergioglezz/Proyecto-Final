'use strict';
const squares = document.querySelectorAll('.casilla');
let turno = 0;
let simbolos = ['❌','⭕'];

function dibujar(squareId) {
    const square = document.getElementById(squareId);
    square.innerHTML = simbolos[turno];
    const iTurno = document.getElementById("indicadorTurno");
    if(verificarGanador(simbolos[turno])){
            const ganador = document.getElementById("ganador");
            const boton = document.getElementById("boton");
            ganador.style.display="block";
            boton.style.display="block";
            ganador.innerText = "GANADOR "+simbolos[turno];
        }
    if (turno==0){
        turno = 1;
    } else {
        turno = 0;
    }; 
    iTurno.innerText = "Turno de "+simbolos[turno];
    
}

function pintar(){
    for (let i = 0; i<squares.length; i++) {
        squares[i].onclick = function(event){
            if(squares[i].innerHTML==""){
                dibujar(event.target.id);
                
            }
        };
        squares[i].onmouseover = function(event){
            squares[i].style.backgroundColor="#cebda5";
            squares[i].style.opacity="1";
        };
        squares[i].onmouseleave = function(event){
            squares[i].style.backgroundColor="blanchedalmond";
            squares[i].style.opacity="0.8";
        };
        
    };
}

function verificarGanador(simbolo) {
    const combinacionesGanadoras = [
        [0,1,2], [3,4,5], [6,7,8], 
        [0,3,6], [1,4,7], [2,5,8], 
        [0,4,8], [2,4,6]
    ];
    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        const [a,b,c] = combinacionesGanadoras[i];
        if (squares[a].innerHTML == simbolo && squares[b].innerHTML == simbolo && squares[c].innerHTML == simbolo) {
            return true;
        }
    }
    return false;
}


pintar();

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
    let menu=document.getElementById("menu");
    menu.style.color="black";
    menu.style.backgroundColor="#CCCCCC";
    let menuderecha=document.getElementById("menu-derecha");
    menuderecha.style.color="black";
    menuderecha.style.backgroundColor="#CCCCCC";
    let modal=document.getElementById("modal-content");
    modal.style.backgroundColor="#CCCCCC"
    modal.style.color="black";
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
    let menu=document.getElementById("menu");
    menu.style.color="white";
    menu.style.backgroundColor="#333333";
    let menuderecha=document.getElementById("menu-derecha");
    menuderecha.style.color="white";
    menuderecha.style.backgroundColor="#333333";
    let modal=document.getElementById("modal-content");
    modal.style.backgroundColor="#333333"
    modal.style.color="white";
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