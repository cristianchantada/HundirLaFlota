import {DISPAROS} from "./data.js";
import { Tablero } from "./classes/classTablero.js";
import {creaArmada, posicionaArmada, rondaDeDisparo, creaJuego, dameNumeroAleatorioAmbosIncluidos, } from "./functions.js";
import {dibujaComienzoBatalla, pintaRondas, pintaDisparosYNavios, pintaImpacto, pintaHundimiento, pintaVictoriaTotal, pintaDisparoErrado, pintaFinMunicion, pintaEstadisticas} from "./visuals.js";


let partida = creaJuego(Tablero, creaArmada, posicionaArmada, dibujaComienzoBatalla);

let finPartida = false;
while(!finPartida){
    finPartida = rondaDeDisparo(partida[0], partida[1], pintaRondas, dameNumeroAleatorioAmbosIncluidos, pintaDisparosYNavios, pintaImpacto, pintaHundimiento, pintaVictoriaTotal, pintaDisparoErrado, pintaFinMunicion);
    if(finPartida) break;
    finPartida = rondaDeDisparo(partida[1], partida[0], pintaRondas, dameNumeroAleatorioAmbosIncluidos, pintaDisparosYNavios, pintaImpacto, pintaHundimiento, pintaVictoriaTotal, pintaDisparoErrado, pintaFinMunicion);
}

pintaEstadisticas(partida, DISPAROS);