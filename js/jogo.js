let dado = 0;
let dadoCtnP = document.querySelector('#dadoP');
let dadoCtnO = document.querySelector('#dadoO');
let tabuleiroO = document.querySelectorAll('#Oponent .Tabuleiro p');
let tabuleiroP = document.querySelectorAll('#Player .Tabuleiro p');

function jogarDado() {
    dado = Math.floor(Math.random() * 6) + 1;
    this.textContent = 0;
    this.textContent = dado;
}

function posicionaDado()
{
    this.textContent = dado;
}

let jogador = {
    jogada: dadoCtnP.addEventListener('click', jogarDado),
    posiciona: tabuleiroP.forEach(e => e.addEventListener("click", posicionaDado))
}
