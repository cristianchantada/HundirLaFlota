import { DISPAROS } from "./data.js";

export class Tablero {
    constructor (nombreJugador){
        this.nombreJugador = nombreJugador;
        this.escenario = [];
        this.disparosJugador = DISPAROS;
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