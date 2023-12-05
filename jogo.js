let dado = 0;
let dadoCtnP = document.querySelector('#dadoP');
let dadoCtnO = document.querySelector('#dadoO');
let tabuleiroO = document.querySelectorAll('#Oponent .Tabuleiro p');
let tabuleiroP = document.querySelectorAll('#Player .Tabuleiro p');


function jogarDado() {
    dado = Math.floor(Math.random() * 6) + 1;
    this.textContent = dado;
}

function posicionaDado(element)
{
    element.textContent = dado;
}

function getDadoCtnP () {
    return dadoCtnP;
}

function getDadoCtnO () {
    return dadoCtnO;
}

function getTabuleiroP () {
    return tabuleiroP;
}

function getTabuleiroO () {
    return tabuleiroO;
}

function procuraZero(tabuleiro)
{
    for(let i = 0; i < 9; i++)
    {
        if(tabuleiro[i].textContent === "0")
        {
            console.log(true);
        }
        return true;
    }
    console.log(false);;
    return false;
}

let jogador = {
    jogada: function (){
        tabuleiroP.forEach(e => e.addEventListener('click', function(e){
            if(e.target.textContent === "0") {
                posicionaDado(e.target);
                jogarDado.call(dadoCtnP);
            }
            oponente.jogada();
        }));
    }
}

let oponente = {
    jogada: function (){
        tabuleiroO.forEach(e => e.addEventListener('click', function(e){
            if(e.target.textContent === "0") {
                posicionaDado(e.target);
                jogarDado.call(dadoCtnO);
            }
            jogador.jogada();
        }));
    }
}

export {jogarDado, posicionaDado, jogador, oponente, procuraZero, getTabuleiroP, getTabuleiroO, getDadoCtnO, getDadoCtnP}