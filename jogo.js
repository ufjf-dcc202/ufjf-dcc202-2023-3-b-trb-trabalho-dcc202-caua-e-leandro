let tabuleiro = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

let dado = 6;
let dadoCtn1 = document.querySelector('#dado1');
let dadoCtn2 = document.querySelector('#dado2');

function jogarDado() {
    dado = Math.floor(Math.random() * 6) + 1;
    this.textContent = dado;
}


let jogador = {
    jogada: dadoCtn1.addEventListener('click', jogarDado),
}