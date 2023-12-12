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

const PColP = document.querySelectorAll('#Player .placarIndividual td p');
const PFinalP = document.querySelector('#placarP');

const PColO = document.querySelectorAll('#Oponent .placarIndividual td p');
const PFinalO = document.querySelector('#placarO');


function tocaMusica() {
    let audio = new Audio('assets/trilha.mp3');
    audio.play();
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
            return true;
        }
    }
    return false;
}

function calculaSomaColuna(Col){
    let soma = 0;
    let num1 = Number(Col[0].textContent);
    let num2 = Number(Col[1].textContent);
    let num3 = Number(Col[2].textContent);

    if (num1 === num2 && num1 === num3){
        soma = num1 * 9;
        } else if (num1 === num2 && num1 !== num3){
        soma = num1 * 4 + num3;
        } else if (num1 === num3 && num1 !== num2){
        soma = num1 * 4 + num2;
        } else if (num2 === num3 && num2 !== num1){
        soma = num2 * 4 + num1;
        } else if (num1 !== num2 && num1 !== num3 && num2 !== num3){
        soma = num1 + num2 + num3;
        }

    return soma;
}

function testeFimJogo(){
    let tabuleiroP = getTabuleiroP();
    let tabuleiroO = getTabuleiroO();

    if(!procuraZero(tabuleiroP) || !procuraZero(tabuleiroO)){
        if(Number(PFinalP.textContent) > Number(PFinalO.textContent)){
            alert("Você ganhou, parabéns!"  + "\n" + "Placar: " + "Você: " + PFinalP.textContent + " " + "Oponente: " + PFinalO.textContent);
            return true;
        } else if(Number(PFinalP.textContent) < Number(PFinalO.textContent)){
            alert("Você perdeu, tente de novo!" + "\n" + "Placar: " + "Você: " + PFinalP.textContent + " " + "Oponente: " + PFinalO.textContent);
            return true;
        } else {
            alert("Empate!" + "\n" + "Placar: " + "Você: " + PFinalP.textContent + " " + "Oponente: " + PFinalO.textContent);
            return true;
        }
    }
    return false;
}

function atualizaPlacar() {
    PColP[0].textContent = calculaSomaColuna(Col1P);
    PColP[1].textContent = calculaSomaColuna(Col2P);
    PColP[2].textContent = calculaSomaColuna(Col3P);
    PFinalP.textContent = Number(PColP[0].textContent) + Number(PColP[1].textContent) + Number(PColP[2].textContent);
    
    PColO[0].textContent = calculaSomaColuna(Col1O);
    PColO[1].textContent = calculaSomaColuna(Col2O);
    PColO[2].textContent = calculaSomaColuna(Col3O);
    PFinalO.textContent = Number(PColO[0].textContent) + Number(PColO[1].textContent) + Number(PColO[2].textContent);
}

let jogador = {
    jogada: function (){
        turno = 1;
        jogarDado(dadoCtnP);
        this.redefineEstiloDadoP(dadoCtnP.textContent, dadoCtnP);
        if(!testeFimJogo()){
        this.posicionamento();
        }
    },

    posicionamento: function () {
        let podeClickar = true;

        tabuleiroP.forEach(e => e.addEventListener('click', (e) => {
            if(podeClickar && e.target.textContent === "0") {
                podeClickar = false;
                posicionaDado(e.target, dadoCtnP);
                this.eliminacaoP();
                atualizaPlacar();
                setTimeout(() => {
                    podeClickar = true;
                }, 200);
                oponente.jogada();
                return 0;
            }
        }));
    },

    eliminacaoP: function (){
        for(let i = 0; i < Col1P.length; i++){
            let valor = Col1P[i].textContent;
            for(let j = 0; j < Col1O.length; j++){
                if(Col1O[j].textContent === valor && valor != "0" && turno === 1){
                    Col1O[j].textContent = "0";
                }
            }
        }
        for(let i = 0; i < Col2P.length; i++){
            let valor = Col2P[i].textContent;
            for(let j = 0; j < Col2O.length; j++){
                if(Col2O[j].textContent === valor && valor != "0" && turno === 1){
                    Col2O[j].textContent = "0";
                }
            }
        }
        for(let i = 0; i < Col3P.length; i++){
            let valor = Col3P[i].textContent;
            for(let j = 0; j < Col3O.length; j++){
                if(Col3O[j].textContent === valor && valor != "0" && turno === 1){
                    Col3O[j].textContent = "0";
                }
            }
        }
    },
    redefineEstiloDadoP: function(num, dado) {
        if (num == 1) {
            dado.style.backgroundImage = "url('assets/dadoPlayer/dado1p.png')";
        } else if (num == 2) {
            dado.style.backgroundImage = "url('assets/dadoPlayer/dado2p.png')";
        } else if (num == 3) {
            dado.style.backgroundImage = "url('assets/dadoPlayer/dado3p.png')";
        } else if (num == 4) {
            dado.style.backgroundImage = "url('assets/dadoPlayer/dado4p.png')";
        } else if (num == 5) {
            dado.style.backgroundImage = "url('assets/dadoPlayer/dado5p.png')";
        } else if (num == 6) {
            dado.style.backgroundImage = "url('assets/dadoPlayer/dado6p.png')";
        }
    }
}

let oponente = {
    jogada: function (){
        turno = 2;
        jogarDado(dadoCtnO);
        this.redefineEstiloDadoO(dadoCtnO.textContent, dadoCtnO);
        let i;
            do{
                i = Math.floor(Math.random() * 9);
            }while(tabuleiroO[i].textContent != "0");
            if(!testeFimJogo()){
                posicionaDado(tabuleiroO[i], dadoCtnO);
            }
            this.eliminacaoO();
            atualizaPlacar();
            PFinalO.textContent = Number(PColO[0].textContent) + Number(PColO[1].textContent) + Number(PColO[2].textContent);  
            jogador.jogada();
            return 0;
        },

    eliminacaoO: function (){
        for(let i = 0; i < Col1O.length; i++){
            let valor = Col1O[i].textContent;
            for(let j = 0; j < Col1P.length; j++){
                if(Col1P[j].textContent === valor && valor != "0" && turno === 2){
                    Col1P[j].textContent = "0";
                }   
            }
        }
        for(let i = 0; i < Col2O.length; i++){
            let valor = Col2O[i].textContent;
            for(let j = 0; j < Col2P.length; j++){
                if(Col2P[j].textContent === valor && valor != "0" && turno === 2){
                    Col2P[j].textContent = "0";
                }
            }
        }
        for(let i = 0; i < Col3O.length; i++){
            let valor = Col3O[i].textContent;
            for(let j = 0; j < Col3P.length; j++){
                if(Col3P[j].textContent === valor && valor != "0" && turno === 2){
                    Col3P[j].textContent = "0";
                }
            }
        }
    },
    redefineEstiloDadoO: function(num, dado) {
        if (num == 1) {
            dado.style.backgroundImage = "url('assets/dadoOponent/dado1o.png')";
        } else if (num == 2) {
            dado.style.backgroundImage = "url('assets/dadoOponent/dado2o.png')";
        } else if (num == 3) {
            dado.style.backgroundImage = "url('assets/dadoOponent/dado3o.png')";
        } else if (num == 4) {
            dado.style.backgroundImage = "url('assets/dadoOponent/dado4o.png')";
        } else if (num == 5) {
            dado.style.backgroundImage = "url('assets/dadoOponent/dado5o.png')";
        } else if (num == 6) {
            dado.style.backgroundImage = "url('assets/dadoOponent/dado6o.png')";
        }
    }
}

tocaMusica();
jogador.jogada();