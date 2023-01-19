import { DISPAROS, PORTAVIONES, ACORAZADOS, CRUCEROS, DESTRUCTORES, SUBMARINOS } from "./data.js";

export class Tablero {
    constructor (nombreJugador){
        this.nombreJugador = nombreJugador;
        this.escenario = [];
        this.disparosJugador = DISPAROS;
        this.diparosAcertados = 0;
        this.disparosErrados = 0;
        this.buquesEnemigosHundidos = 0;
        this.rondasDisparo = 0;
        this.buquesFlota = PORTAVIONES + ACORAZADOS + CRUCEROS + DESTRUCTORES + SUBMARINOS;
    }
    tableroFisico(FILAS, COLUMNAS) {
        for(let i = 0; i < FILAS; i++){
            this.escenario.push([]);
            for(let x = 0; x < COLUMNAS; x++){
                this.escenario[i].push(" ");
            }
        }
    }
}