let dado = 0;

let dadoCtnP = document.querySelector('#dadoP');
let dadoCtnO = document.querySelector('#dadoO');
let tabuleiroO = document.querySelectorAll('#Oponent .Tabuleiro p');
let tabuleiroP = document.querySelectorAll('#Player .Tabuleiro p');

let turno;

const Col1P = document.querySelectorAll('#Player .Tabuleiro td:nth-child(1) p');
const Col2P = document.querySelectorAll('#Player .Tabuleiro td:nth-child(2) p');
const Col3P = document.querySelectorAll('#Player .Tabuleiro td:nth-child(3) p');

const Col1O = document.querySelectorAll('#Oponent .Tabuleiro td:nth-child(1) p');
const Col2O = document.querySelectorAll('#Oponent .Tabuleiro td:nth-child(2) p');
const Col3O = document.querySelectorAll('#Oponent .Tabuleiro td:nth-child(3) p');

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

function jogarDado(container) {
    dado = Math.floor(Math.random() * 6) + 1;
    container.textContent = dado;
}

function posicionaDado(element, container)
{
    element.textContent = container.textContent;
}

function procuraZero(tabuleiro)
{
    for(let i = 0; i < 9; i++)
    {
        if(tabuleiro[i].textContent === "0")
        {
            console.log(true);
            return true;
        }
    }
    console.log(false);;
    return false;
}

let jogador = {
    jogada: function (){
        turno = 1;
        jogarDado(dadoCtnP);
        console.log(turno);
        this.posicionamento();
        console.log(Col1O[0].textContent, Col2O[0].textContent, Col3O[0].textContent);
        console.log(Col1O[1].textContent, Col2O[1].textContent, Col3O[1].textContent);
        console.log(Col1O[2].textContent, Col2O[2].textContent, Col3O[2].textContent);
        console.log("------");
    },

    posicionamento: function (){
        tabuleiroP.forEach(e => e.addEventListener('click', function(e){
            if(e.target.textContent === "0") {
                posicionaDado(e.target, dadoCtnP);
                //this.eliminacaoP(dadoCtnP.textContent);
                oponente.jogada();
                return 0;
            }
        }));
    },

    eliminacaoP: function ( valor){
        for(let j = 0; j < Col1O.length; j++){
                if(Col1O[j].textContent === valor && valor != "0" && turno === 1){
                    Col1O[0].textContent = "0";
                    Col1O[1].textContent = "0";
                    Col1O[2].textContent = "0";
                }
            }
        for(let i = 0; i < Col2P.length; i++){
            let valor = Col2P[i].textContent;
            for(let j = 0; j < Col2O.length; j++){
                if(Col2O[j].textContent === valor && valor != "0" && turno === 1){
                    Col2O[0].textContent = "0";
                    Col2O[1].textContent = "0";
                    Col2O[2].textContent = "0";
                }
            }
        }
        for(let i = 0; i < Col3P.length; i++){
            let valor = Col3P[i].textContent;
            for(let j = 0; j < Col3O.length; j++){
                if(Col3O[j].textContent === valor && valor != "0" && turno === 1){
                    Col3O[0].textContent = "0";
                    Col3O[1].textContent = "0";
                    Col3O[2].textContent = "0";
                }
            }
        }
    }
}

let oponente = {
    jogada: function (){
        turno = 2;
        jogarDado(dadoCtnO);
        console.log(turno);
        let i;
            do{
                i = Math.floor(Math.random() * 9);
            }while(tabuleiroO[i].textContent != "0");
            posicionaDado(tabuleiroO[i], dadoCtnO);
            //this.eliminacaoO();
            console.log(Col1P[0].textContent, Col2P[0].textContent, Col3P[0].textContent);
            console.log(Col1P[1].textContent, Col2P[1].textContent, Col3P[1].textContent);
            console.log(Col1P[2].textContent, Col2P[2].textContent, Col3P[2].textContent);
            console.log("------");
            jogador.jogada();
            return 0;
        },

    eliminacaoO: function (){
        for(let i = 0; i < Col1O.length; i++){
            for(let j = 0; j < Col1P.length; j++){
                if(Col1P[j].textContent === valor && valor != "0" && turno === 2){
                    Col1P[0].textContent = "0";
                    Col1P[1].textContent = "0";
                    Col1P[2].textContent = "0";
                }
            }
        }
        for(let i = 0; i < Col2O.length; i++){
            let valor = Col2O[i].textContent;
            for(let j = 0; j < Col2P.length; j++){
                if(Col2P[j].textContent === valor && valor != "0" && turno === 2){
                    Col2P[0].textContent = "0";
                    Col2P[1].textContent = "0";
                    Col2P[2].textContent = "0";
                }
            }
        }
        for(let i = 0; i < Col3O.length; i++){
            let valor = Col3O[i].textContent;
            for(let j = 0; j < Col3P.length; j++){
                if(Col3P[j].textContent === valor && valor != "0" && turno === 2){
                    Col3P[0].textContent = "0";
                    Col3P[1].textContent = "0";
                    Col3P[2].textContent = "0";
                }
            }
        }
    }
}

export {jogarDado, posicionaDado, jogador, oponente, procuraZero, getTabuleiroP, getTabuleiroO, getDadoCtnO, getDadoCtnP}