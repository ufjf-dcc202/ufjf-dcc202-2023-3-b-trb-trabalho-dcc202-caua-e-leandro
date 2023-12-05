import {jogarDado, posicionaDado, jogador, oponente, procuraZero, getTabuleiroO, getTabuleiroP, getDadoCtnO, getDadoCtnP} from './jogo.js'



jogarDado.call(getDadoCtnP());
jogarDado.call(getDadoCtnO());

jogador.jogada();

procuraZero(getTabuleiroP());
procuraZero(getTabuleiroO());