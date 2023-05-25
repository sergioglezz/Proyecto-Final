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