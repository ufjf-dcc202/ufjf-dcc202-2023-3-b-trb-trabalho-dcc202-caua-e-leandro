let dado = 0;
let dadoCtnP = document.querySelector('#dadoP');
let dadoCtnO = document.querySelector('#dadoO');
let tabuleiroO = document.querySelectorAll('#Oponent .Tabuleiro p');
let tabuleiroP = document.querySelectorAll('#Player .Tabuleiro p');


function jogarDado(container) {
    dado = Math.floor(Math.random() * 6) + 1;
    container.textContent = dado;
}

function posicionaDado(element, container)
{
    element.textContent = container.textContent;
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
        jogarDado(dadoCtnP);
        this.posicionamento();
    },

    posicionamento: function (){
        tabuleiroP.forEach(e => e.addEventListener('click', function(e){
            if(e.target.textContent === "0") {
                posicionaDado(e.target, dadoCtnP);
                oponente.jogada();
                return 0;
            }
        }));
    }
}

let oponente = {
    jogada: function (){
        jogarDado(dadoCtnO);
        let i;
            do{
                i = Math.floor(Math.random() * 9);
            }while(tabuleiroO[i].textContent != "0");
            posicionaDado(tabuleiroO[i], dadoCtnO);
            jogador.jogada();
            return 0;
        }  
}

export {jogarDado, posicionaDado, jogador, oponente, procuraZero, getTabuleiroP, getTabuleiroO, getDadoCtnO, getDadoCtnP}