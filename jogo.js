let dado = 0;
let dadoCtnP = document.querySelector('#dadoP');
let dadoCtnO = document.querySelector('#dadoO');
let tabuleiroO = document.querySelectorAll('#Oponent p');
let tabuleiroP = document.querySelectorAll('#Player p');


function jogarDado() {
    dado = Math.floor(Math.random() * 6) + 1;
    this.textContent = dado;
}

jogarDado.call(dadoCtnP);

function posicionaDado(element)
{
    element.textContent = dado;
}

let jogador = {
    jogada: function (){
        tabuleiroP.forEach(e => e.addEventListener('click', function(e){
            if(e.target.textContent === "0") {
                posicionaDado(e.target);
                jogarDado.call(dadoCtnP);
            }
        }));
    }
}
jogador.jogada()